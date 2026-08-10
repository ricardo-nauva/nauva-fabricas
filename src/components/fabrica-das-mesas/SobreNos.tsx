const ATRIBUTOS = [
  { titulo: "+20 Anos de Experiência", desc: "Mais de duas décadas a fabricar mesas por medida para casas, restaurantes e hotelaria em Portugal." },
  { titulo: "Assistência Vitalícia", desc: "Acompanhamento contínuo depois da entrega, com suporte direto ao cliente." },
  { titulo: "100% Nacional", desc: "Produção inteiramente portuguesa, em Vilela, Paredes — materiais e mão de obra nacionais." },
];

export default function SobreNos() {
  return (
    <section id="sobre-nos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8683A]">
            Sobre Nós
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#3A2A1F]">
            Da oficina à sua mesa, sem intermediários
          </h2>
          <p className="mt-4 leading-relaxed text-[#5C4433]">
            Somos uma loja online que dá acesso direto a uma fábrica física, permitindo
            a qualquer pessoa em Portugal ter mesas de qualidade a preços competitivos.
            Personalizamos cada peça até ao mínimo detalhe: dimensões, cores, acabamentos.
            Visitas à fábrica mediante marcação prévia.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {ATRIBUTOS.map((a) => (
            <div key={a.titulo} className="rounded-2xl border border-[#3A2A1F]/10 bg-[#FAF6F0] p-7">
              <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#3A2A1F]">
                {a.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C4433]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
