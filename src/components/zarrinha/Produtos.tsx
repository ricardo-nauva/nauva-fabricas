import Image from "next/image";

const CATEGORIAS = [
  {
    titulo: "Embalagens de Cartão",
    desc: "Com ou sem impressão, com possibilidade de impressão em alta qualidade com verniz UV. Soluções à medida do produto ou com base em modelos FEFCO.",
    itens: [
      "Caixa para E-Commerce", "Caixa com Fundo Automático", "Caixa Expositora",
      "Caixa para Frutas e Vegetais", "Wrap Around", "Caixa de Arquivo",
      "Caixa para Pizza", "Caixa para Oferta", "Caixa Modelo Americano",
      "Caixa para Calçado", "Separadores", "Proteções",
    ],
  },
  {
    titulo: "Placas de Cartão",
    desc: "Ampla variedade de combinações de canelura e tipos de papel, sempre com um alto nível de qualidade.",
    itens: [],
  },
  {
    titulo: "Simples Face",
    desc: "Produção de Simples Face em bobines ou planos, com diversas gramagens e qualidades de papéis.",
    itens: [],
  },
  {
    titulo: "Papel Reciclado em Bobine",
    desc: "Produção de Papel Reciclado em bobine com medidas até 2,50 m de largura.",
    itens: [],
  },
];

const SERVICOS = [
  { titulo: "Design de Embalagens", desc: "Embalagens exclusivas desenhadas em colaboração com o cliente." },
  { titulo: "Protótipos", desc: "Modelo físico da embalagem antes da produção em grande quantidade." },
  { titulo: "Laboratório", desc: "Testes de materiais, resistência e durabilidade em equipamento de última geração." },
  { titulo: "Serviços de Impressão", desc: "Personalização com a marca e identidade visual do cliente." },
  { titulo: "Serviços de Transporte", desc: "Encomendas manuseadas com cuidado até chegarem em perfeitas condições." },
  { titulo: "Valorização de Resíduos", desc: "Reciclagem dos excedentes de papel dos clientes, transformando-os em novos produtos." },
];

export default function Produtos() {
  return (
    <section id="produtos" className="border-b-2 border-neutral-900 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            Produtos
          </h2>
        </div>

        <div className="mb-14 grid gap-10 lg:grid-cols-[360px_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-neutral-900">
            <Image
              src="/zarrinha/produtos.jpg"
              alt="Embalagens de cartão canelado empilhadas — representação ilustrativa"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm leading-relaxed text-neutral-700">
            Possuímos uma grande variedade de equipamentos de última geração, que nos
            permitem produzir todo o tipo de embalagens de cartão canelado, com
            diferentes tipos de cartão, modelos e qualidades de impressão.
          </p>
        </div>

        <div className="space-y-14">
          {CATEGORIAS.map((c) => (
            <div key={c.titulo} className="border-2 border-neutral-900">
              <div className="border-b-2 border-neutral-900 bg-[#F7F7F3] px-6 py-4">
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-neutral-900">
                  {c.titulo}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-neutral-700">{c.desc}</p>
                {c.itens.length > 0 && (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {c.itens.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-[#007d32] pl-3 text-sm text-neutral-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-neutral-900 p-6">
          <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-neutral-900">
            Impressão de Alta Qualidade
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Impressão flexográfica com BOBST MASTERFLEX, formato 2.100 x 1.300 mm, até 7
            cores, com controlo e ajuste automático ultrapreciso — alternativa
            flexográfica à impressão offset para embalagens de alto valor agregado.
            Dispomos ainda de impressão digital de alta tecnologia e pós-impressão a
            jato de tinta térmica com tintas à base de água, adequadas aos padrões de
            embalagem alimentar.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold uppercase tracking-tight text-neutral-900">
            Serviços Adicionais
          </h3>
          <div className="grid gap-px overflow-hidden border-2 border-neutral-900 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS.map((s) => (
              <div key={s.titulo} className="border border-neutral-300 bg-[#F7F7F3] p-6">
                <h4 className="text-sm font-bold uppercase tracking-tight text-neutral-900">
                  {s.titulo}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
