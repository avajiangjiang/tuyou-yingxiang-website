import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";

export default function Services() {
  return (
    <section id="services">
      <div className="section-padding bg-cream">
        <div className="container-max">
          <SectionTitle
            number="02"
            title="业务范围"
            subtitle="四大核心业务，全方位校园影像服务"
          />

          <div className="mt-6 grid grid-cols-4 gap-2 sm:mt-8 sm:gap-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className={`flex flex-col items-center rounded-xl px-1.5 py-3 text-center sm:px-3 sm:py-4 ${
                  service.highlight
                    ? "bg-brand-400 text-white"
                    : "bg-white ring-1 ring-dark/5"
                }`}
              >
                <span className="text-xl sm:text-2xl">{service.icon}</span>
                <span
                  className={`mt-1.5 text-[10px] font-semibold leading-snug sm:mt-2 sm:text-sm ${
                    service.highlight ? "text-white" : "text-dark"
                  }`}
                >
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max">
          <SectionTitle
            number="02"
            title="业务全景"
            subtitle="专业团队，用心服务每一所学校"
          />

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4">
            {SERVICES.map((service) =>
              service.highlight ? (
                <div key={service.title} className="service-card-highlight">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 text-lg sm:mb-4 sm:h-10 sm:w-10 sm:text-xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold sm:mb-2 sm:text-base">
                    {service.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-white/80 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              ) : (
                <div key={service.title} className="service-card">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-400/10 text-lg sm:mb-4 sm:h-10 sm:w-10 sm:text-xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-dark sm:mb-2 sm:text-base">
                    {service.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-dark/55 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
