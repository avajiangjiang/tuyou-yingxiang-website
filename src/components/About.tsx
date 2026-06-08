import SectionTitle from "@/components/SectionTitle";
import type { SiteConfig } from "@/types";

interface AboutProps {
  stats: SiteConfig["stats"];
}

const BUSINESS_ITEMS = [
  { num: "01", label: "校园活动拍摄" },
  { num: "02", label: "宣传及专题片" },
  { num: "03", label: "毕业季拍摄" },
  { num: "04", label: "毕业活动策划" },
];

export default function About({ stats }: AboutProps) {
  const statItems = [
    { value: stats.schools, label: "服务学校" },
    { value: stats.events, label: "活动场次" },
    { value: stats.albums, label: "毕业相册" },
    { value: stats.films, label: "毕业微电影" },
    { value: stats.students, label: "服务学生" },
    { value: stats.satisfaction, label: "客户满意度" },
  ];

  return (
    <section id="about">
      <div className="section-padding bg-cream">
        <div className="container-max">
          <SectionTitle number="01" title="品牌简介" />

          <div className="mt-6 sm:mt-8 lg:mt-12">
            <h3 className="mb-2 text-lg font-bold text-dark sm:mb-3 sm:text-xl">
              途优校园影像
            </h3>
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-dark/60 sm:mb-8 sm:text-base">
              途优校园影像是一家专注于校园影像服务的专业机构，致力于为中小学提供高品质的活动拍摄、宣传片制作、毕业相册及毕业微电影服务。
            </p>

            <div className="mb-6 space-y-2 sm:mb-8 sm:space-y-2.5">
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
                  className="rounded-xl border-l-[3px] border-brand-400 bg-white px-4 py-3.5 sm:px-5 sm:py-4"
                >
                  <div className="mb-0.5 text-xs font-bold tracking-wider text-brand-500">
                    {item.label}
                  </div>
                  <p className="text-sm leading-relaxed text-dark/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* 手机：横向滑动一排；平板以上：四列等宽 */}
            <div className="mobile-scroll-x sm:grid sm:grid-cols-4 sm:gap-2.5">
              {BUSINESS_ITEMS.map((item) => (
                <div key={item.num} className="business-card">
                  <span className="business-card-num">{item.num}</span>
                  <span className="business-card-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark py-12 sm:py-24">
        <div className="container-max px-5 sm:px-6 lg:px-8">
          <SectionTitle
            number="01"
            title="服务规模"
            subtitle="多年深耕，数据见证实力"
            align="center"
            theme="dark"
          />
          <div className="mt-8 grid grid-cols-3 gap-x-3 gap-y-7 sm:mt-14 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6">
            {statItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xl font-bold text-brand-400 sm:text-4xl">
                  {item.value}
                </div>
                <div className="mt-1 text-xs text-white/45 sm:mt-2 sm:text-sm">
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
