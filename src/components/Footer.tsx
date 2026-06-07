export default function Footer() {
  return (
    <footer className="bg-dark py-14 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-8 w-8 items-center justify-center bg-brand-500 text-xs font-bold">
                途
              </div>
              <div>
                <div className="font-bold">途优校园影像</div>
                <div className="text-[10px] tracking-wider text-white/40">
                  TUYOU CAMPUS IMAGE
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/40">用镜头珍藏校园时光</p>
          </div>
          <div className="text-center text-sm md:text-right">
            <p className="text-brand-500">携手途优 · 共创美好</p>
            <p className="mt-1 text-white/40">
              期待与您的合作，共同为学子珍藏最美的校园回忆
            </p>
            <p className="mt-4 text-xs text-white/25">
              © {new Date().getFullYear()} 途优校园影像 版权所有
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
