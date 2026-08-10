const PASSOS = [
  { n: "01", titulo: "Envie a sua ideia", desc: "Partilhe imagens ou referências do que procura — ou descreva a mesa que tem em mente." },
  { n: "02", titulo: "Escolha à medida", desc: "Defina dimensões, cores e acabamentos ao seu gosto, até ao mínimo detalhe." },
  { n: "03", titulo: "Orçamento grátis", desc: "Receba uma proposta sem compromisso, adaptada ao seu projeto." },
  { n: "04", titulo: "Entrega em Portugal", desc: "Entregamos em todo o território nacional, incluindo Madeira e Açores, com montagem opcional." },
];

export default function Personalizacao() {
  return (
    <section id="personalizacao" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8683A]">
            Personalização
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#3A2A1F]">
            100% personalizada ao seu gosto
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((p) => (
            <div key={p.n}>
              <span className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#B8683A]">
                {p.n}
              </span>
              <h3 className="mt-3 text-base font-semibold text-[#3A2A1F]">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C4433]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
