import Image from "next/image";
import { ALBUM_PACKAGES, WORKFLOW_STEPS } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";

const ALBUM_IMAGE =
  "https://images.unsplash.com/photo-1516979187457-637abb88f58e?w=900&q=80";

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* 左栏文字 */}
          <div>
            <span className="mb-4 inline-block bg-brand-500 px-3 py-1 text-xs font-bold tracking-wider text-white">
              03 · 核心产品
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
              毕业相册
            </h2>
            <p className="mb-8 text-dark/55">
              承载学子校园回忆的珍贵载体
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "个性化定制",
                  desc: "每所学校独立设计版面风格，融入校园特色元素，打造独一无二的毕业纪念册。",
                },
                {
                  title: "高品质印刷",
                  desc: "采用进口纸张与环保油墨，确保相册经久耐用、质感出众。",
                },
                {
                  title: "丰富内容",
                  desc: "班级合影、个人风采、校园风光、师生寄语、成长足迹，全方位记录校园时光。",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="mb-1 font-bold text-brand-500">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-dark/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 服务流程 */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-bold tracking-wider text-dark/40 uppercase">
                服务流程
              </p>
              <div className="flex flex-wrap gap-2">
                {WORKFLOW_STEPS.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="bg-dark px-3 py-1.5 text-xs font-medium text-white">
                      {step}
                    </span>
                    {i < WORKFLOW_STEPS.length - 1 && (
                      <span className="text-brand-400">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右栏图片 */}
          <div className="relative aspect-[4/5] overflow-hidden bg-cream lg:aspect-auto lg:h-[560px]">
            <Image
              src={ALBUM_IMAGE}
              alt="毕业相册展示"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* 套餐方案 */}
        <div className="mt-24">
          <SectionTitle
            number="03"
            title="部份相册展示"
            align="center"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {ALBUM_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={
                  pkg.featured
                    ? "bg-brand-400 p-8 text-white"
                    : "bg-cream p-8 ring-1 ring-dark/5"
                }
              >
                <div className="mb-6 border-b border-current/20 pb-4">
                  <span
                    className={`text-4xl font-bold ${
                      pkg.featured ? "text-white" : "text-brand-500"
                    }`}
                  >
                    {pkg.name}
                  </span>
                </div>
                <div className="space-y-4 text-sm">
                  <p className={pkg.featured ? "text-white/80" : "text-dark/60"}>
                    {pkg.photos}
                  </p>
                  <p className={pkg.featured ? "text-white/80" : "text-dark/60"}>
                    {pkg.shoots}
                  </p>
                  <div>
                    <p
                      className={`mb-2 text-xs font-bold tracking-wider uppercase ${
                        pkg.featured ? "text-white/60" : "text-dark/40"
                      }`}
                    >
                      服务团队
                    </p>
                    <ul
                      className={`space-y-1 ${
                        pkg.featured ? "text-white/75" : "text-dark/55"
                      }`}
                    >
                      {pkg.team.map((member) => (
                        <li key={member}>· {member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
