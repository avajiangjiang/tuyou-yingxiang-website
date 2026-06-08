import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-dark pt-[calc(3.5rem+env(safe-area-inset-top))]">
      <Image
        src="/hero-bg.jpg"
        alt="校园影像背景"
        fill
        priority
        className="object-cover object-center opacity-50"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark/95" />

      <div className="relative z-10 mx-auto w-full max-w-lg px-5 py-8 text-center sm:max-w-4xl sm:px-4">
        <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-brand-400 uppercase sm:mb-6 sm:text-xs sm:tracking-[0.35em]">
          TUYOU CAMPUS IMAGE
        </p>

        <h1 className="mb-3 text-[1.75rem] font-bold leading-snug text-white sm:mb-5 sm:text-5xl lg:text-6xl">
          途优校园影像
        </h1>

        <p className="mb-3 text-base font-light text-brand-300 sm:mb-4 sm:text-xl">
          用镜头珍藏校园时光
        </p>

        <p className="mx-auto mb-8 max-w-sm text-[13px] leading-relaxed text-white/55 sm:mb-12 sm:max-w-xl sm:text-base">
          专注校园影像服务，为中小学提供高品质活动拍摄、宣传片制作、毕业相册及毕业微电影
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="#portfolio"
            className="w-full rounded-lg bg-brand-400 py-3.5 text-sm font-semibold text-white transition active:bg-brand-300 sm:w-auto sm:min-w-[160px] sm:rounded-none sm:px-8"
          >
            查看作品案例
          </a>
          <a
            href="#films"
            className="w-full rounded-lg border border-white/25 py-3.5 text-sm font-semibold text-white transition active:bg-white/10 sm:w-auto sm:min-w-[160px] sm:rounded-none sm:px-8"
          >
            微电影展示
          </a>
        </div>
      </div>
    </section>
  );
}
