import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80";

export default function Services() {
  return (
    <section id="services">
      {/* 全宽横幅 */}
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden sm:h-[480px]">
        <Image
          src={BANNER_IMAGE}
          alt="业务范围"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 px-4 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-brand-500">
            02
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            业务范围
          </h2>
          <p className="mt-4 text-sm text-white/55 sm:text-base">
            四大核心业务，全方位校园影像服务
          </p>
        </div>
      </div>

      {/* 业务全景 */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <SectionTitle
            number="02"
            title="业务全景"
            subtitle="四大核心业务，全方位校园影像服务"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {SERVICES.map((service) =>
              service.highlight ? (
                <div key={service.title} className="service-card-highlight">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-white/30 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>
                </div>
              ) : (
                <div key={service.title} className="service-card">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand-500/10 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark/55">
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
