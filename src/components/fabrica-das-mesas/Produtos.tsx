import Image from "next/image";

const CATEGORIAS = [
  { nome: "Mesas", desc: "Altas, baixas, compridas ou largas — para casa, refeitório, cantina ou restaurante." },
  { nome: "Cadeiras e Bancos", desc: "Complementos pensados para acompanhar cada mesa, com o mesmo nível de personalização." },
  { nome: "Hotelaria", desc: "Mobiliário para uso intensivo diário, preparado para restaurantes, cafetarias e refeitórios." },
  { nome: "Exterior", desc: "Peças adaptadas para espaços exteriores, com acabamentos à escolha do cliente." },
];

export default function Produtos() {
  return (
    <section id="produtos" className="bg-[#FAF6F0]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 grid gap-10 lg:grid-cols-[380px_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/fabrica-das-mesas/oficina.jpg"
              alt="Oficina de marcenaria — representação ilustrativa"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8683A]">
              Produtos
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#3A2A1F]">
              Mobiliário para casa e hotelaria
            </h2>
            <p className="mt-4 leading-relaxed text-[#5C4433]">
              Sem limitação de quantidade: fabricamos uma unidade para um particular
              ou mais de mil peças para um projeto de hotelaria. Cada peça é testada
              para uso intensivo diário.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIAS.map((c) => (
            <div key={c.nome} className="rounded-2xl border border-[#3A2A1F]/10 bg-white p-6">
              <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#3A2A1F]">
                {c.nome}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C4433]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
