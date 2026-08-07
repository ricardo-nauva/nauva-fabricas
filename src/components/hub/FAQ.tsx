const FAQS = [
  {
    q: "Quanto tempo demora a construir o site?",
    a: "Depende do conteúdo disponível e da complexidade do catálogo, mas o processo é sempre acompanhado de perto consigo até à aprovação final.",
  },
  {
    q: "Precisam de fotografias ou textos novos?",
    a: "Trabalhamos com o que já existe — site antigo, catálogos, documentos — e identificamos consigo o que falta, sem nunca inventar dados sobre a sua empresa.",
  },
  {
    q: "O site fica optimizado para pesquisas de compradores B2B?",
    a: "Sim — a estrutura de conteúdo é pensada para quem pesquisa fornecedores online: catálogo claro, certificações visíveis e contactos directos.",
  },
];

export default function FAQ() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Perguntas frequentes
        </h2>
        <div className="mt-12 divide-y divide-slate-200 border-t border-b border-slate-200">
          {FAQS.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
