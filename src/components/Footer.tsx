export default function Footer() {
  return (
    <footer className="bg-brand-950 py-12 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold">途优校园影像</div>
            <div className="mt-1 text-sm text-white/60">TUYOU CAMPUS IMAGE</div>
            <div className="mt-3 text-sm text-white/50">
              用镜头珍藏校园时光
            </div>
          </div>
          <div className="text-center text-sm text-white/50 md:text-right">
            <p>携手途优 · 共创美好</p>
            <p className="mt-1">期待与您的合作，共同为学子珍藏最美的校园回忆</p>
            <p className="mt-4 text-xs text-white/30">
              © {new Date().getFullYear()} 途优校园影像 版权所有
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
