const PASSOS = [
  {
    numero: "01",
    titulo: "Conhecemos a sua fábrica",
    desc: "Recolhemos o conteúdo real — história, processo produtivo, catálogo, certificações — a partir do que já existe ou de conversa directa consigo.",
  },
  {
    numero: "02",
    titulo: "Desenhamos o site",
    desc: "Criamos uma identidade visual própria para a sua empresa, nunca um template genérico reutilizado entre clientes.",
  },
  {
    numero: "03",
    titulo: "Lançamos e entregamos",
    desc: "Site pronto para publicar, com o seu domínio, optimizado para os compradores que o vão encontrar a pesquisar online.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Como funciona
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {PASSOS.map((p) => (
            <div key={p.numero}>
              <span className="bg-gradient-to-r from-[#2CA9E0] via-[#6D5CE8] to-[#7A5CF0] bg-clip-text text-4xl font-bold text-transparent">
                {p.numero}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
