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
          number="06"
          title="携手合作"
          subtitle="共同为学子珍藏最美的校园回忆"
          align="center"
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-5">
          {COOPERATION_STEPS.map((step) => (
            <div
              key={step.step}
              className="border-t-2 border-brand-500 bg-cream p-5"
            >
              <div className="mb-2 text-2xl font-light text-brand-500">
                {step.step}
              </div>
              <div className="mb-1 text-sm font-bold text-dark">{step.title}</div>
              <div className="text-xs text-dark/50">{step.desc}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl bg-dark p-10 text-center text-white sm:p-14">
          <h3 className="mb-2 text-xl font-bold">合作咨询</h3>
          <div className="mx-auto mb-8 h-px w-12 bg-brand-500" />
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: "联系电话", value: contact.phone },
              { label: "电子邮箱", value: contact.email },
              { label: "微信咨询", value: contact.wechat },
              { label: "公司地址", value: contact.address },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-xs tracking-wider text-white/40 uppercase">
                  {item.label}
                </div>
                <div className="mt-1 font-medium text-brand-400">
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
