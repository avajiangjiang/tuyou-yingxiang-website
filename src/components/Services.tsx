import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-600 uppercase">
            02 · 业务范围
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            四大核心业务
          </h2>
          <p className="mt-3 text-gray-500">全方位校园影像服务</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl p-8 transition hover:shadow-xl ${
                service.highlight
                  ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20"
                  : "border border-gray-100 bg-white shadow-sm hover:border-brand-100"
              }`}
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3
                className={`mb-3 text-xl font-bold ${
                  service.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
                {service.highlight && (
                  <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium backdrop-blur-sm">
                    核心产品
                  </span>
                )}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.highlight ? "text-brand-100" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
