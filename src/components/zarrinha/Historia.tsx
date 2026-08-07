import Image from "next/image";

const MARCOS = [
  { ano: "1956", titulo: "O Início", desc: "O Sr. Orlando de Oliveira Santos adquire uma pequena fábrica de produção de papel seco ao ar, com cerca de 1.200 m²." },
  { ano: "1962", titulo: "Ampliação das Instalações", desc: "Instalação de uma bateria de secadores e respetivo equipamento, gerador a vapor, máquina de corte mecânico e rebobinadora." },
  { ano: "1969", titulo: "Produção de Simples Face", desc: "Início da produção de Simples Face em bobine." },
  { ano: "1973", titulo: "Segunda Máquina de Fabrico de Papel", desc: "Aumento da capacidade produtiva e competitividade." },
  { ano: "1981", titulo: "Segunda Ampliação das Instalações", desc: "Novos edifícios com caneladora, máquinas de transformação e equipamentos topo de gama, ampliando a gama de produtos de Cartão Canelado." },
  { ano: "1997", titulo: "Contrato de Adaptação Ambiental", desc: "Adesão ao contrato de adaptação ambiental, com medidas concretizadas até 1999." },
  { ano: "2002", titulo: "Impressão de Alta Qualidade", desc: "Pioneiros na produção de embalagens com impressão de alta qualidade. Certificação NP EN ISO 9001." },
  { ano: "2013", titulo: "Certificação Ambiental", desc: "Certificação pelo Ambiente NP EN ISO 14001." },
  { ano: "2019", titulo: "Certificação FSC®", desc: "Certificação de Cadeia de Responsabilidade FSC®, possibilitando a comercialização de embalagens certificadas." },
  { ano: "2023", titulo: "Unidade de Produção Auto-Consumo", desc: "Instalação de painéis fotovoltaicos, reduzindo consumo energético e impacto ambiental." },
];

export default function Historia() {
  return (
    <section id="historia" className="border-b-2 border-neutral-900 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 flex items-baseline justify-between border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            A Nossa História
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-neutral-500 sm:block">
            1956 — 2023
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            {MARCOS.map((m) => (
              <div
                key={m.ano}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-l-2 border-[#007d32] pl-6 lg:grid-cols-[120px_1fr] lg:items-baseline"
              >
                <span className="font-mono text-2xl font-bold text-[#007d32]">{m.ano}</span>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-neutral-900">
                    {m.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-neutral-900">
              <Image
                src="/zarrinha/historia.jpg"
                alt="Maquinaria industrial de fabrico de papel — representação ilustrativa"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Representação ilustrativa do processo industrial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
