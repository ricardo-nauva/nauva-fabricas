export default function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Sites para indústria transformadora
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
          Sites que apresentam a sua fábrica com a seriedade que merece.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          Criamos sites dedicados para empresas industriais — metalomecânica, plásticos,
          têxtil, embalagem, alimentar — construídos à volta do processo produtivo,
          catálogo e certificações reais de cada fábrica.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="rounded-none border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-neutral-900"
          >
            Pedir Proposta
          </a>
          <a
            href="#servicos"
            className="rounded-none border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-900"
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
