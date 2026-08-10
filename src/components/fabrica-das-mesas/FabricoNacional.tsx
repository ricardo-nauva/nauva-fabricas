import Image from "next/image";

const GARANTIAS = [
  { titulo: "Mais de 20 Anos", desc: "de experiência na fabricação de mobiliário por medida." },
  { titulo: "Assistência Vitalícia", desc: "acompanhamento contínuo após a entrega da sua mesa." },
  { titulo: "Testes de Segurança", desc: "cada peça é preparada para uso intensivo diário." },
  { titulo: "100% Nacional", desc: "produção inteiramente portuguesa, em Vilela, Paredes." },
];

export default function FabricoNacional() {
  return (
    <section className="bg-[#FAF6F0]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:order-2">
          <Image
            src="/fabrica-das-mesas/hotelaria.jpg"
            alt="Mesas para hotelaria — representação ilustrativa"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8683A]">
            Fabrico Nacional
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#3A2A1F]">
            Garantias que acompanham cada mesa
          </h2>
          <div className="mt-8 space-y-6">
            {GARANTIAS.map((g) => (
              <div key={g.titulo} className="border-l-2 border-[#B8683A] pl-4">
                <h3 className="font-semibold text-[#3A2A1F]">{g.titulo}</h3>
                <p className="text-sm text-[#5C4433]">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
