import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80";

export default function Services() {
  return (
    <section id="services">
      <div className="relative flex h-[240px] items-center justify-center overflow-hidden sm:h-[420px]">
        <Image
          src={BANNER_IMAGE}
          alt="业务范围"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 px-5 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-brand-400 sm:mb-3 sm:tracking-[0.3em]">
            02
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            业务范围
          </h2>
          <p className="mt-2 text-[13px] text-white/55 sm:mt-4 sm:text-base">
            四大核心业务，全方位校园影像服务
          </p>
        </div>
      </div>

      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="hidden sm:block">
            <SectionTitle
              number="02"
              title="业务全景"
              subtitle="四大核心业务，全方位校园影像服务"
            />
          </div>

          <div className="mt-0 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
            {SERVICES.map((service) =>
              service.highlight ? (
                <div key={service.title} className="service-card-highlight">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-xl sm:mb-5 sm:h-12 sm:w-12 sm:text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold sm:mb-3 sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/80 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              ) : (
                <div key={service.title} className="service-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-400/10 text-xl sm:mb-5 sm:h-12 sm:w-12 sm:text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-dark sm:mb-3 sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-dark/55 sm:text-sm">
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
