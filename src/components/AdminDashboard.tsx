"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MediaPreview from "@/components/MediaPreview";
import type { PortfolioItem, PartnerSchool, MediaType } from "@/types";
import { CATEGORY_LABELS, TYPE_LABELS, MEDIA_TYPE_LABELS } from "@/lib/constants";

type Tab = "portfolio" | "partners";

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("portfolio");
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [schools, setSchools] = useState<PartnerSchool[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    category: "primary" as PortfolioItem["category"],
    type: "activity" as PortfolioItem["type"],
    mediaType: "photo" as MediaType,
    school: "",
    description: "",
    image: "",
    video: "",
    featured: false,
  });
  const [uploading, setUploading] = useState<string | null>(null);

  const [partnerForm, setPartnerForm] = useState({
    name: "",
    level: "primary" as PartnerSchool["level"],
  });

  const fetchData = useCallback(async () => {
    const [portfolioRes, partnersRes] = await Promise.all([
      fetch("/api/portfolio"),
      fetch("/api/partners"),
    ]);

    const portfolio = await portfolioRes.json();
    const partners = await partnersRes.json();
    setItems(portfolio.items);
    setSchools(partners.schools);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const resetForm = () => {
    setForm({
      title: "",
      category: "primary",
      type: "activity",
      mediaType: "photo",
      school: "",
      description: "",
      image: "",
      video: "",
      featured: false,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "image" | "video"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(field);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const { url, mediaType } = await res.json();
        if (field === "video" || mediaType === "video") {
          setForm((prev) => ({ ...prev, video: url, mediaType: "video" }));
        } else {
          setForm((prev) => ({ ...prev, image: url }));
        }
      } else {
        const err = await res.json();
        alert(err.error || "上传失败");
      }
    } finally {
      setUploading(null);
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.mediaType === "photo" && !form.image) {
      alert("请上传照片作品");
      return;
    }
    if (form.mediaType === "video" && !form.video) {
      alert("请上传视频作品");
      return;
    }

    if (editingId) {
      await fetch("/api/portfolio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...form }),
      });
    } else {
      await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    resetForm();
    fetchData();
  };

  const handleEdit = (item: PortfolioItem) => {
    setForm({
      title: item.title,
      category: item.category,
      type: item.type,
      mediaType: item.mediaType || "photo",
      school: item.school,
      description: item.description,
      image: item.image,
      video: item.video || "",
      featured: item.featured,
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("确定删除该作品？")) return;
    await fetch("/api/portfolio", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  const handleAddPartner = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/partners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partnerForm),
    });
    setPartnerForm({ name: "", level: "primary" });
    fetchData();
  };

  const handleDeletePartner = async (id: string) => {
    if (!confirm("确定删除该合作学校？")) return;
    await fetch("/api/partners", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              途
            </div>
            <span className="font-bold text-gray-900">管理后台</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-sm text-brand-600 hover:underline"
            >
              查看网站
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              退出登录
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setTab("portfolio")}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              tab === "portfolio"
                ? "bg-brand-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            作品管理 ({items.length})
          </button>
          <button
            onClick={() => setTab("partners")}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              tab === "partners"
                ? "bg-brand-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            合作学校 ({schools.length})
          </button>
        </div>

        {tab === "portfolio" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold">作品案例</h2>
              <button
                onClick={() => {
                  resetForm();
                  setShowForm(true);
                }}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
              >
                + 添加作品
              </button>
            </div>

            {showForm && (
              <form
                onSubmit={handleSubmit}
                className="mb-8 rounded-xl bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 font-bold">
                  {editingId ? "编辑作品" : "添加新作品"}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      作品标题
                    </label>
                    <input
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                      className="w-full rounded-lg border px-3 py-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      学校名称
                    </label>
                    <input
                      value={form.school}
                      onChange={(e) =>
                        setForm({ ...form, school: e.target.value })
                      }
                      className="w-full rounded-lg border px-3 py-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      学段
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          category: e.target.value as PortfolioItem["category"],
                        })
                      }
                      className="w-full rounded-lg border px-3 py-2 text-sm"
                    >
                      {Object.entries(CATEGORY_LABELS).map(([k, v]) => (
                        <option key={k} value={k}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      作品类型
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          type: e.target.value as PortfolioItem["type"],
                        })
                      }
                      className="w-full rounded-lg border px-3 py-2 text-sm"
                    >
                      {Object.entries(TYPE_LABELS).map(([k, v]) => (
                        <option key={k} value={k}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      作品形式
                    </label>
                    <select
                      value={form.mediaType}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          mediaType: e.target.value as MediaType,
                        })
                      }
                      className="w-full rounded-lg border px-3 py-2 text-sm"
                    >
                      {Object.entries(MEDIA_TYPE_LABELS).map(([k, v]) => (
                        <option key={k} value={k}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm text-gray-600">
                      作品描述
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      className="w-full rounded-lg border px-3 py-2 text-sm"
                      rows={2}
                    />
                  </div>

                  {form.mediaType === "photo" ? (
                    <div className="sm:col-span-2 space-y-4">
                      <div>
                        <label className="mb-1 block text-sm text-gray-600">
                          照片链接 <span className="text-red-500">*</span>
                          <span className="ml-2 text-xs font-normal text-brand-600">
                            推荐：上传到云存储后粘贴链接
                          </span>
                        </label>
                        <input
                          type="url"
                          value={form.image}
                          onChange={(e) =>
                            setForm({ ...form, image: e.target.value.trim() })
                          }
                          placeholder="https://你的云存储.com/photo.jpg"
                          className="w-full rounded-lg border px-3 py-2 text-sm"
                        />
                        <p className="mt-1 text-xs text-gray-400">
                          支持阿里云 OSS、腾讯云 COS、七牛云等 HTTPS 链接，稳定不占服务器空间
                        </p>
                      </div>
                      <div>
                        <label className="mb-1 block text-sm text-gray-500">
                          或本地上传照片（备选）
                        </label>
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/gif"
                          onChange={(e) => handleUpload(e, "image")}
                          className="w-full text-sm"
                          disabled={uploading === "image"}
                        />
                        <p className="mt-1 text-xs text-gray-400">
                          本地开发可用，线上 Vercel 可能无法永久保存
                        </p>
                      </div>
                      {form.image && (
                        <div className="flex items-center gap-3">
                          <div className="relative h-16 w-24 overflow-hidden rounded-lg bg-gray-100">
                            <MediaPreview src={form.image} alt="预览" />
                          </div>
                          <p className="break-all text-xs text-green-600">{form.image}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="sm:col-span-2 space-y-4">
                        <div>
                          <label className="mb-1 block text-sm text-gray-600">
                            视频链接 <span className="text-red-500">*</span>
                            <span className="ml-2 text-xs font-normal text-brand-600">
                              推荐：上传到云存储后粘贴链接
                            </span>
                          </label>
                          <input
                            type="url"
                            value={form.video}
                            onChange={(e) =>
                              setForm({ ...form, video: e.target.value.trim() })
                            }
                            placeholder="https://你的云存储.com/video.mp4"
                            className="w-full rounded-lg border px-3 py-2 text-sm"
                          />
                          <p className="mt-1 text-xs text-gray-400">
                            视频建议放云端（OSS/COS/七牛等），后台只存链接，播放更稳定
                          </p>
                        </div>
                        <div>
                          <label className="mb-1 block text-sm text-gray-500">
                            或本地上传视频（备选）
                          </label>
                          <input
                            type="file"
                            accept="video/mp4,video/webm,video/quicktime,video/x-msvideo"
                            onChange={(e) => handleUpload(e, "video")}
                            className="w-full text-sm"
                            disabled={uploading === "video"}
                          />
                          {uploading === "video" && (
                            <p className="mt-1 text-xs text-brand-600">视频上传中，请稍候...</p>
                          )}
                        </div>
                        {form.video && (
                          <p className="break-all text-xs text-green-600">视频：{form.video}</p>
                        )}
                      </div>
                      <div className="sm:col-span-2 space-y-4">
                        <div>
                          <label className="mb-1 block text-sm text-gray-600">
                            封面图链接（选填）
                          </label>
                          <input
                            type="url"
                            value={form.image}
                            onChange={(e) =>
                              setForm({ ...form, image: e.target.value.trim() })
                            }
                            placeholder="https://你的云存储.com/cover.jpg"
                            className="w-full rounded-lg border px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm text-gray-500">
                            或本地上传封面（备选）
                          </label>
                          <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp,image/gif"
                            onChange={(e) => handleUpload(e, "image")}
                            className="w-full text-sm"
                            disabled={uploading === "image"}
                          />
                        </div>
                        {form.image && (
                          <div className="flex items-center gap-3">
                            <div className="relative h-16 w-24 overflow-hidden rounded-lg bg-gray-100">
                              <MediaPreview src={form.image} alt="封面预览" />
                            </div>
                            <p className="break-all text-xs text-green-600">{form.image}</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  <div className="flex items-center gap-2 sm:col-span-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={form.featured}
                      onChange={(e) =>
                        setForm({ ...form, featured: e.target.checked })
                      }
                    />
                    <label htmlFor="featured" className="text-sm text-gray-600">
                      精选展示
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    type="submit"
                    className="rounded-lg bg-brand-600 px-6 py-2 text-sm font-medium text-white"
                  >
                    {editingId ? "保存修改" : "添加作品"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-lg border px-6 py-2 text-sm text-gray-600"
                  >
                    取消
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-brand-100">
                    {item.image || item.mediaType === "photo" ? (
                      <MediaPreview
                        src={item.image || ""}
                        alt={item.title}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-2xl opacity-30">
                        🎬
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-900">
                      {item.title}
                      <span className="ml-2 rounded bg-brand-100 px-1.5 py-0.5 text-xs text-brand-700">
                        {MEDIA_TYPE_LABELS[item.mediaType || "photo"]}
                      </span>
                      {item.featured && (
                        <span className="ml-2 rounded bg-brand-500 px-1.5 py-0.5 text-xs text-white">
                          精选
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.school} · {CATEGORY_LABELS[item.category]} ·{" "}
                      {TYPE_LABELS[item.type]}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="rounded-lg border px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="rounded-lg border px-3 py-1.5 text-sm text-red-500 hover:bg-red-50"
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "partners" && (
          <div>
            <h2 className="mb-6 text-lg font-bold">合作学校</h2>

            <form
              onSubmit={handleAddPartner}
              className="mb-8 flex flex-wrap items-end gap-4 rounded-xl bg-white p-6 shadow-sm"
            >
              <div>
                <label className="mb-1 block text-sm text-gray-600">
                  学校名称
                </label>
                <input
                  value={partnerForm.name}
                  onChange={(e) =>
                    setPartnerForm({ ...partnerForm, name: e.target.value })
                  }
                  className="rounded-lg border px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-600">学段</label>
                <select
                  value={partnerForm.level}
                  onChange={(e) =>
                    setPartnerForm({
                      ...partnerForm,
                      level: e.target.value as PartnerSchool["level"],
                    })
                  }
                  className="rounded-lg border px-3 py-2 text-sm"
                >
                  {Object.entries(CATEGORY_LABELS).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white"
              >
                添加学校
              </button>
            </form>

            <div className="space-y-2">
              {schools.map((school) => (
                <div
                  key={school.id}
                  className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
                >
                  <div>
                    <span className="font-medium">{school.name}</span>
                    <span className="ml-2 text-sm text-gray-500">
                      {CATEGORY_LABELS[school.level]}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeletePartner(school.id)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    删除
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
