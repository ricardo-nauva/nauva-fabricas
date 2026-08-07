import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-neutral-900 bg-[#F7F7F3]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007d32]">
            Desde 1956 · Paços de Brandão, Portugal
          </p>
          <h1 className="mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl">
            Embalagens de Cartão Canelado
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
            Mais de 60 anos de experiência no desenvolvimento de soluções de embalagem de
            cartão canelado — equipa multidisciplinar, produção automatizada e certificação
            de qualidade, ambiente e cadeia de responsabilidade FSC®.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contactos"
              className="border-2 border-neutral-900 bg-[#007d32] px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-900"
            >
              Pedir Orçamento
            </a>
            <a
              href="#produtos"
              className="border-2 border-neutral-900 px-7 py-3 text-sm font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Ver Catálogo
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden border-2 border-neutral-900">
          <Image
            src="/zarrinha/hero.jpg"
            alt="Linha de produção de embalagens de cartão canelado"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
