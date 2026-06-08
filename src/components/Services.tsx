import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream">
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
    </section>
  );
}
