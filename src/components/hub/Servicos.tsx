const SERVICOS = [
  {
    title: "Site dedicado por fábrica",
    desc: "UI própria para cada cliente, construída a partir da identidade visual e conteúdo real da empresa — nunca um template genérico reutilizado.",
  },
  {
    title: "Catálogo de produtos/linhas",
    desc: "Apresentação organizada por categoria de produto, processo produtivo e especificações técnicas reais.",
  },
  {
    title: "Certificações e normas",
    desc: "Destaque das certificações de qualidade, ambiente e sector que a empresa já possui.",
  },
  {
    title: "Formulário de orçamento",
    desc: "Contacto adaptado ao tipo de pedido — orçamento, encomenda, pós-venda — em vez de um formulário genérico.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          O que está incluído
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICOS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
