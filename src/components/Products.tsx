import SectionTitle from "@/components/SectionTitle";

const ALBUM_FEATURES = [
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
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <SectionTitle number="03" title="毕业相册" subtitle="承载学子校园回忆的珍贵载体" />

        <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
          {ALBUM_FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-cream px-2.5 py-3 sm:px-4 sm:py-5"
            >
              <h3 className="mb-1.5 text-xs font-bold text-brand-500 sm:mb-2 sm:text-base">
                {item.title}
              </h3>
              <p className="text-[10px] leading-relaxed text-dark/60 sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
