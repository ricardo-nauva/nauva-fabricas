const CERTIFICACOES = [
  { codigo: "ISO 9001", titulo: "Qualidade", desc: "Certificação em conformidade com a norma ISO 9001, relativa a todo o processo — da conceção à comercialização." },
  { codigo: "ISO 14001", titulo: "Ambiente", desc: "Certificação pelo Sistema de Gestão Ambiental, de acordo com o referencial normativo ISO 14001." },
  { codigo: "FSC®", titulo: "Cadeia de Responsabilidade", desc: "Certificação da cadeia de responsabilidade junto do Forest Stewardship Council® (FSC®), para gestão florestal responsável." },
];

export default function Certificacoes() {
  return (
    <section className="border-b-2 border-neutral-900 bg-[#F7F7F3]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            Certificações
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden border-2 border-neutral-900 sm:grid-cols-3">
          {CERTIFICACOES.map((c) => (
            <div key={c.codigo} className="border border-neutral-300 bg-white p-8">
              <span className="font-mono text-2xl font-bold text-[#007d32]">{c.codigo}</span>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-widest text-neutral-900">
                {c.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
