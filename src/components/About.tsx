import { ADVANTAGES } from "@/lib/constants";
import type { SiteConfig } from "@/types";

interface AboutProps {
  stats: SiteConfig["stats"];
}

export default function About({ stats }: AboutProps) {
  const statItems = [
    { value: stats.schools, label: "服务学校" },
    { value: stats.events, label: "拍摄活动场次" },
    { value: stats.albums, label: "毕业相册制作" },
    { value: stats.films, label: "毕业微电影" },
    { value: stats.students, label: "服务学生人数" },
    { value: stats.satisfaction, label: "客户满意度" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-600 uppercase">
            01 · 关于途优
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            品牌简介
          </h2>
        </div>

        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-brand-800">
              途优校园影像
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              途优校园影像是一家专注于校园影像服务的专业机构，致力于为中小学提供高品质的活动拍摄、宣传片制作、毕业相册及毕业微电影服务。
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border border-brand-100 bg-white p-4">
                <div className="mb-1 text-sm font-semibold text-brand-600">使命</div>
                <p className="text-sm text-gray-600">
                  用专业影像技术，为每一位学生珍藏校园时光，留存最美好的成长记忆。
                </p>
              </div>
              <div className="rounded-xl border border-brand-100 bg-white p-4">
                <div className="mb-1 text-sm font-semibold text-brand-600">愿景</div>
                <p className="text-sm text-gray-600">
                  成为校园影像服务领域的领先品牌。
                </p>
              </div>
              <div className="rounded-xl border border-brand-100 bg-white p-4">
                <div className="mb-1 text-sm font-semibold text-brand-600">服务理念</div>
                <p className="text-sm font-medium text-gray-700">
                  专业 · 用心 · 创新 · 品质
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "01", label: "学校宣传" },
              { num: "02", label: "活动拍摄" },
              { num: "03", label: "毕业旅拍" },
              { num: "04", label: "毕业行策划" },
            ].map((item) => (
              <div
                key={item.num}
                className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white shadow-lg shadow-brand-500/20 transition hover:shadow-xl"
              >
                <span className="text-3xl font-bold opacity-30">{item.num}</span>
                <span className="mt-2 text-lg font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
            我们的优势
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-transparent bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h4 className="mb-2 font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">
            服务规模
          </h3>
          <p className="mb-10 text-center text-gray-500">
            多年深耕，数据见证实力
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-6 text-center text-white shadow-md"
              >
                <div className="text-2xl font-bold sm:text-3xl">{item.value}</div>
                <div className="mt-2 text-xs text-brand-200 sm:text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
