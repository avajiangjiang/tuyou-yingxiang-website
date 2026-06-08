export default function Footer() {
  return (
    <footer className="bg-dark px-5 py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] text-white sm:py-14">
      <div className="container-max">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <div className="flex h-8 w-8 items-center justify-center bg-brand-400 text-xs font-bold">
                途
              </div>
              <div>
                <div className="font-bold">途优校园影像</div>
                <div className="text-[10px] tracking-wider text-white/40">
                  TUYOU CAMPUS IMAGE
                </div>
              </div>
            </div>
            <p className="mt-3 text-[13px] text-white/40">用镜头珍藏校园时光</p>
          </div>
          <div className="text-[13px] sm:text-sm">
            <p className="text-brand-400">携手途优 · 共创美好</p>
            <p className="mt-1 text-white/40">
              期待与您的合作，共同为学子珍藏最美的校园回忆
            </p>
            <p className="mt-3 text-[11px] text-white/25">
              © {new Date().getFullYear()} 途优校园影像 版权所有
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
