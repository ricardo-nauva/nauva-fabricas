const CTA_URL = "https://www.nauva.ai/website";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#2CA9E0] via-[#6D5CE8] to-[#7A5CF0]">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Vamos apresentar a sua fábrica online?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          Fale connosco para discutirmos o site dedicado à sua empresa.
        </p>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-opacity hover:opacity-90"
        >
          Pedir Proposta
        </a>
      </div>
    </section>
  );
}
