import { COOPERATION_STEPS } from "@/lib/constants";
import type { SiteConfig } from "@/types";

interface ContactProps {
  contact: SiteConfig["contact"];
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-600 uppercase">
            06 · 携手合作
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            期待与您的合作
          </h2>
          <p className="mt-3 text-gray-500">
            共同为学子珍藏最美的校园回忆
          </p>
        </div>

        <div className="mb-16 grid gap-4 sm:grid-cols-5">
          {COOPERATION_STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-brand-100 bg-white p-5 text-center"
            >
              <div className="mb-2 text-2xl font-bold text-brand-200">
                {step.step}
              </div>
              <div className="mb-1 font-bold text-gray-900">{step.title}</div>
              <div className="text-xs text-gray-500">{step.desc}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-center text-white sm:p-12">
          <h3 className="mb-6 text-2xl font-bold">合作咨询</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-brand-200">联系电话</div>
              <div className="text-xl font-semibold">{contact.phone}</div>
            </div>
            <div>
              <div className="text-sm text-brand-200">电子邮箱</div>
              <div className="text-lg">{contact.email}</div>
            </div>
            <div>
              <div className="text-sm text-brand-200">微信咨询</div>
              <div className="text-lg">{contact.wechat}</div>
            </div>
            <div>
              <div className="text-sm text-brand-200">公司地址</div>
              <div className="text-lg">{contact.address}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
