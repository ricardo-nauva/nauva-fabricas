export default function CotacaoOnline() {
  return (
    <section id="cotacao-online" className="border-y border-[#1D2733]/10 bg-[#F4F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8432E]">
          Cotação Online
        </span>
        <h2 className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
          Peça a sua cotação sem compromisso
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#3D4A59]">
          Não fornecemos preços por telefone. Preencha o formulário em baixo ou
          envie-nos o seu pedido por email — respondemos em breve.
        </p>
        <a
          href="#contactos"
          className="mt-8 inline-block rounded bg-[#D8432E] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B5321F]"
        >
          Preencher Formulário de Cotação
        </a>
      </div>
    </section>
  );
}
