export default function Footer() {
  return (
    <footer className="border-t border-[#3A2A1F]/15 bg-[#FAF6F0]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <span className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#3A2A1F]">
          Fábrica das Mesas
        </span>
        <p className="text-xs uppercase tracking-widest text-[#5C4433]/60">
          © {new Date().getFullYear()} Fábrica das Mesas — Vilela, Paredes
        </p>
      </div>
    </footer>
  );
}
