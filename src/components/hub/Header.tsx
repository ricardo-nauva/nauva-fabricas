import Image from "next/image";

const CTA_URL = "https://www.nauva.ai/website";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="relative h-10 w-32">
          <Image
            src="/logo_nauva.png"
            alt="Nauva"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-[#2CA9E0] via-[#6D5CE8] to-[#7A5CF0] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Pedir Proposta
        </a>
      </div>
    </header>
  );
}
