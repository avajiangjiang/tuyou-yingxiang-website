import { ALBUM_PACKAGES, WORKFLOW_STEPS } from "@/lib/constants";

export default function Products() {
  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-600 uppercase">
            03 · 核心产品
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            毕业相册
          </h2>
          <p className="mt-3 text-gray-500">
            承载学子校园回忆的珍贵载体
          </p>
        </div>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
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
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-brand-700">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {WORKFLOW_STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-brand-600 px-4 py-1.5 text-sm font-medium text-white">
                {step}
              </span>
              {i < WORKFLOW_STEPS.length - 1 && (
                <span className="text-brand-300">→</span>
              )}
            </div>
          ))}
        </div>

        <h3 className="mb-8 text-center text-xl font-bold text-gray-900">
          部份相册展示
        </h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {ALBUM_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 ${
                pkg.featured
                  ? "bg-brand-600 text-white ring-4 ring-brand-200"
                  : "bg-white shadow-sm"
              }`}
            >
              <div className="mb-4 text-center">
                <span
                  className={`text-3xl font-bold ${
                    pkg.featured ? "text-white" : "text-brand-600"
                  }`}
                >
                  {pkg.name}
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <p className={pkg.featured ? "text-brand-100" : "text-gray-600"}>
                  {pkg.photos}
                </p>
                <p className={pkg.featured ? "text-brand-100" : "text-gray-600"}>
                  {pkg.shoots}
                </p>
                <div>
                  <p
                    className={`mb-1 font-semibold ${
                      pkg.featured ? "text-white" : "text-gray-800"
                    }`}
                  >
                    服务团队
                  </p>
                  <ul
                    className={`space-y-1 ${
                      pkg.featured ? "text-brand-100" : "text-gray-600"
                    }`}
                  >
                    {pkg.team.map((member) => (
                      <li key={member}>· {member}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className={`mb-1 font-semibold ${
                      pkg.featured ? "text-white" : "text-gray-800"
                    }`}
                  >
                    拍摄内容
                  </p>
                  <p className={pkg.featured ? "text-brand-100" : "text-gray-600"}>
                    {pkg.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
