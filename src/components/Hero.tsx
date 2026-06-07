import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark">
      <Image
        src="/hero-bg.jpg"
        alt="校园影像背景"
        fill
        priority
        className="object-cover object-center opacity-60"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-6 text-xs font-bold tracking-[0.35em] text-brand-500 uppercase">
          TUYOU CAMPUS IMAGE
        </p>

        <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          途优校园影像
        </h1>

        <p className="mb-4 text-lg font-light text-brand-300 sm:text-xl">
          用镜头珍藏校园时光
        </p>

        <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
          专注校园影像服务，为中小学提供高品质
          活动拍摄、宣传片制作、毕业相册及毕业微电影
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#portfolio"
            className="min-w-[160px] bg-brand-400 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-300"
          >
            查看作品案例
          </a>
          <a
            href="#contact"
            className="min-w-[160px] border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-brand-500 hover:text-brand-400"
          >
            合作咨询
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-brand-500 to-transparent" />
      </div>
    </section>
  );
}
