const DIFERENCIADORES = [
  { titulo: "Elevado Know-How", desc: "Elevado conhecimento do negócio por parte da Administração e Direção de Topo, com décadas de experiência no sector." },
  { titulo: "Experiência no Mercado", desc: "Mais de 60 anos a adaptar-se às mudanças do mercado, investindo em tecnologia e modernização dos processos produtivos." },
  { titulo: "Flexibilidade Organizacional", desc: "Articulação funcional entre a área Comercial e a Produção, respondendo a solicitações em prazos reduzidos." },
  { titulo: "Produção Automatizada", desc: "Parque industrial com equipamentos tecnologicamente avançados, integrados nas várias fases de produção." },
  { titulo: "Sucesso do Cliente", desc: "Capacidade de produzir diversos tipos de embalagens, adaptáveis ao produto a transportar." },
  { titulo: "Práticas Sustentáveis", desc: "Medidas contínuas para reduzir o consumo de energia, água e matérias-primas." },
];

export default function SobreNos() {
  return (
    <section className="border-b-2 border-neutral-900 bg-[#F7F7F3]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            Missão, Visão e Valores
          </h2>
        </div>

        <div className="grid gap-10 border-2 border-neutral-900 sm:grid-cols-3">
          <div className="border-neutral-900 p-8 sm:border-r-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007d32]">
              Missão
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Satisfação e fidelização do cliente, através do desenvolvimento de soluções
              de embalagem de cartão canelado e de parcerias sustentáveis.
            </p>
          </div>
          <div className="border-neutral-900 p-8 sm:border-r-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007d32]">
              Visão
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Ser uma referência no mercado, reconhecida pela qualidade e inovação das
              soluções de embalagem, com foco na sustentabilidade social e ambiental.
            </p>
          </div>
          <div className="p-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007d32]">
              Valores
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Responsabilidade, segurança, honestidade, compromisso, flexibilidade,
              solidez, qualidade e solidariedade.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border-2 border-neutral-900 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIADORES.map((d) => (
            <div key={d.titulo} className="border border-neutral-300 bg-white p-6">
              <h4 className="text-sm font-bold uppercase tracking-tight text-neutral-900">
                {d.titulo}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
