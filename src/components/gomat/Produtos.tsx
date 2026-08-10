import Image from "next/image";

const PRODUTOS = [
  { nome: "Chapa Ondulada", img: "/gomat/produtos/chapa-ondulada.jpg" },
  { nome: "Chapa Imitação de Telha", img: "/gomat/produtos/telha.png" },
  { nome: "Chapa Canelada 13-10", img: "/gomat/produtos/chapa-canelada-13-10.png" },
  { nome: "Chapa Perfilada 5 Ondas", img: "/gomat/produtos/perfilada.jpg" },
  { nome: "Caleiras e Remates", img: "/gomat/produtos/tapajuntas.jpg" },
  { nome: "Painel Sandwich Imitação de Telha", img: "/gomat/produtos/telha2.png" },
  { nome: "Chapa Policarbonato", img: "/gomat/produtos/thermoclear2.jpg" },
  { nome: "Perfis Estruturais", img: "/gomat/produtos/omega1502.png" },
];

export default function Produtos() {
  return (
    <section id="produtos" className="bg-[#F4F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8432E]">
            Produtos
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
            Os nossos principais produtos
          </h2>
          <p className="mt-4 leading-relaxed text-[#3D4A59]">
            Soluções para coberturas e fachadas, com opções personalizadas em
            acabamento zincado, inox ou lacado, adaptadas a projetos industriais
            e residenciais.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUTOS.map((p) => (
            <div
              key={p.nome}
              className="overflow-hidden rounded-lg border border-[#1D2733]/10 bg-white shadow-sm"
            >
              <div className="relative aspect-square bg-white p-4">
                <Image
                  src={p.img}
                  alt={p.nome}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="bg-[#444444] px-3 py-2.5 text-center text-sm font-semibold text-white">
                {p.nome}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#3D4A59]/60">
          Lista completa de produtos e acabamentos disponível mediante contacto.
        </p>
      </div>
    </section>
  );
}
