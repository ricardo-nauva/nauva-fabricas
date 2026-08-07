const SECTORES = [
  "Metalomecânica", "Plásticos", "Têxtil", "Moldes",
  "Alimentar", "Embalagem", "Componentes", "Cerâmica",
];

export default function ParaQuemE() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Para quem é</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Trabalhamos com empresas de indústria transformadora que querem uma presença
          online à altura da sua produção.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SECTORES.map((s) => (
            <span
              key={s}
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
