import Image from "next/image";
import { ALBUM_PACKAGES, WORKFLOW_STEPS } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";

const ALBUM_IMAGE =
  "https://images.unsplash.com/photo-1516979187457-637abb88f58e?w=900&q=80";

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-xl bg-cream sm:mb-0 sm:hidden">
          <Image
            src={ALBUM_IMAGE}
            alt="毕业相册展示"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="mb-3 inline-block rounded bg-brand-400 px-2.5 py-1 text-[11px] font-bold tracking-wider text-white sm:mb-4 sm:px-3 sm:text-xs">
              03 · 核心产品
            </span>
            <h2 className="mb-2 text-2xl font-bold text-dark sm:mb-4 sm:text-4xl">
              毕业相册
            </h2>
            <p className="mb-6 text-[13px] text-dark/55 sm:mb-8 sm:text-base">
              承载学子校园回忆的珍贵载体
            </p>

            <div className="space-y-5 sm:space-y-6">
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
                <div
                  key={item.title}
                  className="rounded-lg bg-cream px-4 py-3 sm:bg-transparent sm:p-0"
                >
                  <h3 className="mb-1 text-sm font-bold text-brand-500 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-dark/60 sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <p className="mb-3 text-[11px] font-bold tracking-wider text-dark/40 uppercase sm:mb-4 sm:text-xs">
                服务流程
              </p>
              {/* 手机：竖向列表 */}
              <div className="space-y-2 sm:hidden">
                {WORKFLOW_STEPS.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-400 text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[13px] text-dark/70">{step}</span>
                  </div>
                ))}
              </div>
              {/* 桌面：横向 */}
              <div className="hidden flex-wrap gap-2 sm:flex">
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

          <div className="relative hidden aspect-[4/5] overflow-hidden bg-cream sm:block lg:aspect-auto lg:h-[560px]">
            <Image
              src={ALBUM_IMAGE}
              alt="毕业相册展示"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12 sm:mt-24">
          <SectionTitle number="03" title="部份相册展示" align="center" />
          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
            {ALBUM_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={
                  pkg.featured
                    ? "rounded-xl bg-brand-400 p-3 text-white sm:rounded-none sm:p-8"
                    : "rounded-xl bg-cream p-3 ring-1 ring-dark/5 sm:rounded-none sm:p-8"
                }
              >
                <div className="mb-3 border-b border-current/20 pb-2 sm:mb-6 sm:pb-4">
                  <span
                    className={`text-2xl font-bold sm:text-4xl ${
                      pkg.featured ? "text-white" : "text-brand-500"
                    }`}
                  >
                    {pkg.name}
                  </span>
                </div>
                <div className="space-y-2 text-[11px] sm:space-y-4 sm:text-sm">
                  <p className={pkg.featured ? "text-white/80" : "text-dark/60"}>
                    {pkg.photos}
                  </p>
                  <p className={pkg.featured ? "text-white/80" : "text-dark/60"}>
                    {pkg.shoots}
                  </p>
                  <div>
                    <p
                      className={`mb-1.5 text-[11px] font-bold tracking-wider uppercase sm:mb-2 sm:text-xs ${
                        pkg.featured ? "text-white/60" : "text-dark/40"
                      }`}
                    >
                      服务团队
                    </p>
                    <ul
                      className={`space-y-0.5 ${
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
