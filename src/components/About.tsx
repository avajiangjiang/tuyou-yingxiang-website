import Image from "next/image";
import { ADVANTAGES } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";
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
    <section id="about">
      {/* 品牌简介 */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <SectionTitle number="01" title="品牌简介" />

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="mb-4 text-xl font-bold text-dark">途优校园影像</h3>
              <p className="mb-8 leading-relaxed text-dark/60">
                途优校园影像是一家专注于校园影像服务的专业机构，致力于为中小学提供高品质的活动拍摄、宣传片制作、毕业相册及毕业微电影服务。
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "使命",
                    text: "用专业影像技术，为每一位学生珍藏校园时光，留存最美好的成长记忆。",
                  },
                  {
                    label: "愿景",
                    text: "成为校园影像服务领域的领先品牌。",
                  },
                  {
                    label: "服务理念",
                    text: "专业 · 用心 · 创新 · 品质",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 border-brand-500 bg-white px-5 py-4"
                  >
                    <div className="mb-1 text-xs font-bold tracking-wider text-brand-500 uppercase">
                      {item.label}
                    </div>
                    <p className="text-sm text-dark/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "01", label: "学校宣传" },
                { num: "02", label: "活动拍摄" },
                { num: "03", label: "毕业旅拍" },
                { num: "04", label: "毕业行策划" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex aspect-square flex-col items-center justify-center bg-dark p-6 text-white"
                >
                  <span className="text-3xl font-light text-brand-500">
                    {item.num}
                  </span>
                  <span className="mt-2 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 我们的优势 */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <h3 className="mb-10 text-center text-xl font-bold text-dark">
            我们的优势
          </h3>
          <div className="grid gap-px bg-dark/5 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 transition hover:bg-cream"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-brand-500/10 text-xl">
                  {item.icon}
                </div>
                <h4 className="mb-2 font-bold text-dark">{item.title}</h4>
                <p className="text-sm leading-relaxed text-dark/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 服务规模 — 深色区块 */}
      <div className="bg-dark py-20 sm:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <SectionTitle
            number="01"
            title="服务规模"
            subtitle="多年深耕，数据见证实力"
            align="center"
            theme="dark"
          />
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {statItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-bold text-brand-500 sm:text-4xl">
                  {item.value}
                </div>
                <div className="mt-2 text-xs text-white/45 sm:text-sm">
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
