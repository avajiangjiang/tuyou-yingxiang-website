import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt="校园影像背景"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* 爱马仕橙渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/85 via-brand-900/70 to-brand-800/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-hero-pattern" />

      {/* 装饰光晕 */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-brand-400/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
          <p className="text-xs font-medium tracking-[0.25em] text-brand-200 uppercase">
            TUYOU CAMPUS IMAGE
          </p>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
          途优校园影像
        </h1>

        <p className="mb-4 text-xl font-medium text-brand-100 sm:text-2xl lg:text-3xl">
          用镜头珍藏校园时光
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          专注校园影像服务，为中小学提供高品质
          <br className="hidden sm:block" />
          活动拍摄、宣传片制作、毕业相册及毕业微电影
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 hover:shadow-brand-400/40"
          >
            查看作品案例
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-300 hover:bg-brand-500/20"
          >
            合作咨询
          </a>
        </div>

        {/* 数据亮点 */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: "200+", label: "服务学校" },
            { value: "20万+", label: "毕业相册" },
            { value: "98%", label: "客户满意度" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-brand-300 sm:text-3xl">
                {item.value}
              </div>
              <div className="mt-1 text-xs text-white/60 sm:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-1 rounded-full bg-brand-400" />
        </div>
      </div>
    </section>
  );
}
