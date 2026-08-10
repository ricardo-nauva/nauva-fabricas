import Image from "next/image";

const CAPACIDADES = [
  {
    titulo: "Perfilagem",
    desc: "Chapa ondulada, perfilada 5 ondas e perfilada 6 ondas — espessura máxima de 0,8mm.",
  },
  {
    titulo: "Quinagem CNC",
    desc: "Peças até 12 metros, espessura máxima de 3mm. Quinagem convencional até 3 metros, máximo 6mm.",
  },
  {
    titulo: "Corte CNC",
    desc: "Até 6 metros, espessura máxima de 4mm. Corte convencional até 3 metros, máximo 8mm.",
  },
  {
    titulo: "Processamento de Bobines",
    desc: "Corte transversal até 1500mm (máx. 3mm) e corte longitudinal até 1500mm (máx. 1,5mm).",
  },
];

export default function Profissionais() {
  return (
    <section id="profissionais" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg lg:order-2">
          <Image
            src="/gomat/nave-industrial.jpg"
            alt="Nave industrial de perfilagem e corte de chapa metálica — representação ilustrativa"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
            Profissionais
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
            Capacidade técnica ao serviço de cada encomenda
          </h2>
          <p className="mt-4 leading-relaxed text-[#3D4A59]">
            A nossa equipa opera maquinaria própria de perfilagem, quinagem e
            corte CNC, com formação contínua para garantir precisão e qualidade
            em cada peça produzida.
          </p>
          <div className="mt-8 space-y-6">
            {CAPACIDADES.map((c) => (
              <div key={c.titulo} className="border-l-2 border-[#D8432E] pl-4">
                <h3 className="font-semibold text-[#1D2733]">{c.titulo}</h3>
                <p className="text-sm text-[#3D4A59]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
