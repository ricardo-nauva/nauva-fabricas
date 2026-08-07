const PILARES = [
  { titulo: "Reutilizar", desc: "Promovemos a reutilização de materiais, reduzindo o consumo de recursos naturais e a quantidade de resíduos produzidos." },
  { titulo: "Reciclar", desc: "Valorizamos resíduos como matéria-prima para novas bobines de papel, promovendo a economia circular." },
  { titulo: "Reduzir", desc: "Unidade fotovoltaica para autoconsumo e circuito fechado de água, reduzindo o consumo de energia e água captada." },
];

export default function Sustentabilidade() {
  return (
    <section id="sustentabilidade" className="border-b-2 border-neutral-900 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            Sustentabilidade
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border-2 border-neutral-900 sm:grid-cols-3">
          {PILARES.map((p) => (
            <div key={p.titulo} className="border border-neutral-300 bg-[#F7F7F3] p-8">
              <h3 className="text-lg font-bold uppercase tracking-tight text-[#007d32]">
                {p.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-neutral-600">
          Sendo o nosso produto de base florestal, ao utilizar papéis certificados FSC®
          ou de origem controlada, estamos comprometidos com a gestão florestal
          responsável e sustentável, privilegiando soluções de fonte reciclada.
        </p>
      </div>
    </section>
  );
}
