"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem, PartnerSchool } from "@/types";
import { CATEGORY_LABELS, TYPE_LABELS } from "@/lib/constants";

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
    school: "",
    description: "",
    image: "",
    featured: false,
  });

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
      school: "",
      description: "",
      image: "",
      featured: false,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const { url } = await res.json();
      setForm((prev) => ({ ...prev, image: url }));
    } else {
      const err = await res.json();
      alert(err.error || "上传失败");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      school: item.school,
      description: item.description,
      image: item.image,
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
                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      封面图片
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUpload}
                      className="w-full text-sm"
                    />
                    {form.image && (
                      <p className="mt-1 text-xs text-green-600">
                        已上传：{form.image}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 pt-6">
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
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-2xl opacity-30">
                        📷
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-900">
                      {item.title}
                      {item.featured && (
                        <span className="ml-2 rounded bg-accent-500 px-1.5 py-0.5 text-xs text-white">
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
