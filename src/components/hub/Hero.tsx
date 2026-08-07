const CTA_URL = "https://www.nauva.ai/website";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Sites para indústria transformadora
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          A sua fábrica merece um site à altura do que produz.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
          Criamos sites dedicados para empresas industriais — construídos à volta do
          processo produtivo, catálogo e certificações reais de cada fábrica.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#2CA9E0] via-[#6D5CE8] to-[#7A5CF0] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Pedir Proposta
          </a>
        </div>
      </div>
    </section>
  );
}
