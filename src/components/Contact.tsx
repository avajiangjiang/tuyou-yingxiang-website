import { COOPERATION_STEPS } from "@/lib/constants";
import SectionTitle from "@/components/SectionTitle";
import type { SiteConfig } from "@/types";

interface ContactProps {
  contact: SiteConfig["contact"];
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <SectionTitle
          number="05"
          title="携手合作"
          subtitle="共同为学子珍藏最美的校园回忆"
          align="center"
        />

        <div className="mobile-scroll-x mt-6 sm:mt-12 sm:grid sm:grid-cols-5 sm:gap-3">
          {COOPERATION_STEPS.map((step) => (
            <div
              key={step.step}
              className="min-w-[72vw] shrink-0 rounded-xl border border-dark/5 bg-cream p-5 sm:min-w-0 sm:rounded-none sm:border-0 sm:border-t-2 sm:border-brand-400 sm:bg-cream sm:p-5"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-400 text-sm font-bold text-white sm:mb-3 sm:h-auto sm:w-auto sm:rounded-none sm:bg-transparent sm:text-2xl sm:font-light sm:text-brand-400">
                {step.step}
              </div>
              <div className="text-sm font-bold text-dark">{step.title}</div>
              <div className="mt-1 text-[13px] leading-relaxed text-dark/50">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-dark p-5 text-white sm:mt-14 sm:rounded-none sm:p-14">
          <h3 className="text-center text-lg font-bold sm:text-left sm:text-xl">
            合作咨询
          </h3>
          <div className="mx-auto my-4 h-px w-10 bg-brand-400 sm:mx-0 sm:mb-8 sm:w-12" />
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
            {[
              { label: "联系电话", value: contact.phone },
              { label: "电子邮箱", value: contact.email },
              { label: "微信咨询", value: contact.wechat },
              { label: "公司地址", value: contact.address },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white/5 px-4 py-3.5 sm:bg-transparent sm:p-0"
              >
                <div className="text-[11px] tracking-wider text-white/40">
                  {item.label}
                </div>
                <div className="mt-1 break-all text-sm font-medium text-brand-300 sm:text-base">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
