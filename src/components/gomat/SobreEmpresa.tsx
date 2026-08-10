const VALORES = [
  {
    titulo: "Responsabilidade",
    desc: "Operamos com integridade e profissionalismo, respeitando os interesses e objetivos de cada cliente.",
  },
  {
    titulo: "Dedicação",
    desc: "Focados na satisfação das necessidades dos nossos clientes, com soluções competitivas e flexíveis de alta qualidade.",
  },
  {
    titulo: "Espírito de Equipa",
    desc: "Promovemos a iniciativa e a criatividade entre todos os colaboradores.",
  },
];

export default function SobreEmpresa() {
  return (
    <section id="sobre-a-empresa" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
            A Empresa
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
            Uma empresa familiar desde 1981
          </h2>
          <p className="mt-4 leading-relaxed text-[#3D4A59]">
            A GOMAT® é a marca registada de Gonçalves &amp; Matias, Lda, empresa
            familiar com larga experiência no fabrico de chapas para coberturas e
            fachadas. Investimos de forma constante na modernização de máquinas e
            na formação dos nossos colaboradores, para garantir qualidade e
            conformidade com os padrões mais atuais.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {VALORES.map((v) => (
            <div key={v.titulo} className="rounded-lg border border-[#1D2733]/10 bg-[#F4F5F7] p-6">
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-[#1D2733]">
                {v.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
