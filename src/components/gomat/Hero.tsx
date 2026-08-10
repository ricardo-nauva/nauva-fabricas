import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="bg-[#F4F5F7]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
            Desde 1981
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-4xl font-extrabold uppercase leading-[1.05] text-[#1D2733] sm:text-5xl lg:text-6xl">
            A máxima qualidade e experiência ao seu dispor
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#3D4A59]">
            Fabrico e comércio de chapas para coberturas e fachadas, perfis e
            remates — para projetos industriais e residenciais em todo o país.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cotacao-online"
              className="rounded bg-[#D8432E] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B5321F]"
            >
              Pedir Cotação Online
            </a>
            <a
              href="#produtos"
              className="rounded border border-[#1D2733]/25 px-7 py-3.5 text-sm font-semibold text-[#1D2733] transition-colors hover:border-[#1D2733]/50"
            >
              Ver Produtos
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/gomat/hero.jpg"
            alt="Chapas metálicas onduladas para coberturas — representação ilustrativa"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
