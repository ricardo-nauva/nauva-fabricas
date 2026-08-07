const SECTORES = [
  "Químico e Farmacêutico", "Cerâmica", "Automóvel", "Vinho e Bebidas",
  "Cortiça", "Alimentar", "Mobiliário", "Outros",
];

export default function Sectores() {
  return (
    <section className="border-b-2 border-neutral-900 bg-[#F7F7F3]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            Sectores que Servimos
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {SECTORES.map((s) => (
            <span
              key={s}
              className="border-2 border-neutral-900 bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-800"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
