export default function Certificacoes() {
  return (
    <section className="bg-[#F4F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-[#1D2733]/10 bg-white p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
              Certificação
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-[#1D2733]">
              PME Líder 2017
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
              Reconhecimento atribuído a empresas nacionais com desempenho e
              perfil de risco sólidos.
            </p>
          </div>
          <div className="rounded-lg border border-[#1D2733]/10 bg-white p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
              Conformidade
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-[#1D2733]">
              Lei nº144/2015
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
              Conformidade com o regime jurídico de resolução alternativa de
              litígios de consumo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
