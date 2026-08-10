export default function Footer() {
  return (
    <footer className="border-t border-[#1D2733]/15 bg-[#F4F5F7]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <span className="font-[family-name:var(--font-barlow-condensed)] text-lg font-extrabold uppercase text-[#1D2733]">
          GOMAT<span className="text-[#E8622C]">®</span>
        </span>
        <p className="text-xs uppercase tracking-widest text-[#3D4A59]/60">
          © {new Date().getFullYear()} Gonçalves &amp; Matias, Lda — Vagos, Aveiro
        </p>
      </div>
    </footer>
  );
}
