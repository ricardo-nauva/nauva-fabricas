export default function ProcessoProdutivo() {
  return (
    <section className="border-b-2 border-neutral-900 bg-[#F7F7F3]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            Processo Produtivo
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
          <div className="relative aspect-video overflow-hidden border-2 border-neutral-900">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/zarrinha/processo.mp4" type="video/mp4" />
            </video>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-neutral-700">
              Da matéria-prima ao produto final: bobines de papel são transformadas em
              cartão canelado através de equipamentos de última geração, com controlo de
              qualidade em cada etapa — desde a caneladora até à impressão e corte.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Representação ilustrativa do processo produtivo, não filmagem da instalação real
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
