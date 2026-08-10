import Image from "next/image";

const CATEGORIAS = [
  "Chapa Ondulada",
  "Chapa Canelada (13-10 / 7-25 / 10-25 / à medida)",
  "Chapa Perfilada (5 e 6 ondas)",
  "Chapa Imitação de Telha",
  "Chapa Autoportante / Colaborante",
  "Painel Sandwich (standard, imitação telha, fachada)",
  "Chapa Policarbonato",
  "Chapa Lacada",
  "Chapa Zincada, Inox, Zinco Puro",
  "Calhas e Perfis Estruturais",
  "Caleiras e Remates",
  "Tubos e Acessórios de Fixação",
];

export default function Produtos() {
  return (
    <section id="produtos" className="bg-[#F4F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-14 grid gap-10 lg:grid-cols-[380px_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/gomat/armazem.jpg"
              alt="Armazém com chapas metálicas empilhadas — representação ilustrativa"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
              Produtos
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
              Chapas, perfis e remates para cada projeto
            </h2>
            <p className="mt-4 leading-relaxed text-[#3D4A59]">
              Soluções para coberturas e fachadas, com opções personalizadas em
              acabamento zincado, inox ou lacado, adaptadas a projetos industriais
              e residenciais.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIAS.map((c) => (
            <div
              key={c}
              className="rounded-lg border border-[#1D2733]/10 bg-white px-5 py-4 text-sm font-medium text-[#1D2733]"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
