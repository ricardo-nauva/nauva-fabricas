import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="bg-[#FAF6F0]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8683A]">
            Casa &amp; Hotelaria
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.1] text-[#3A2A1F] sm:text-5xl">
            Mesas por medida, feitas para durar
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5C4433]">
            Fabricamos mesas altas, baixas, compridas e largas — 100% personalizadas
            ao seu gosto. Produção 100% nacional, sem limite de quantidade: de uma
            peça única até encomendas de mais de mil unidades.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contactos"
              className="rounded-full bg-[#B8683A] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8B4A2B]"
            >
              Pedir Orçamento Grátis
            </a>
            <a
              href="#produtos"
              className="rounded-full border border-[#3A2A1F]/25 px-7 py-3.5 text-sm font-semibold text-[#3A2A1F] transition-colors hover:border-[#3A2A1F]/50"
            >
              Ver Produtos
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/fabrica-das-mesas/hero.jpg"
            alt="Mesa de madeira por medida — representação ilustrativa"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
