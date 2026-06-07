export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-brand-300 uppercase">
          TUYOU CAMPUS IMAGE
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          途优校园影像
        </h1>
        <p className="mb-4 text-xl text-brand-100 sm:text-2xl">
          用镜头珍藏校园时光
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          专注校园影像服务，为中小学提供高品质
          <br className="hidden sm:block" />
          活动拍摄、宣传片制作、毕业相册及毕业微电影
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
          >
            查看作品案例
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            合作咨询
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
