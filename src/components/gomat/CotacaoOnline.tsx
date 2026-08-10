export default function CotacaoOnline() {
  return (
    <section id="cotacao-online" className="bg-[#1D2733]">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
          Cotação Online
        </span>
        <h2 className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-white sm:text-4xl">
          Peça a sua cotação sem compromisso
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/75">
          Não fornecemos preços por telefone. Envie-nos o seu pedido por email e
          respondemos em breve.
        </p>
        <a
          href="mailto:geral@gomat.pt"
          className="mt-8 inline-block rounded bg-[#E8622C] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#C74F1F]"
        >
          Pedir Cotação por Email
        </a>
      </div>
    </section>
  );
}
