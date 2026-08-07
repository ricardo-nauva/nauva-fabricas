export default function CTA() {
  return (
    <section id="contacto" className="bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Vamos apresentar a sua fábrica online?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-300">
          Fale connosco para discutirmos o site dedicado à sua empresa.
        </p>
        <a
          href="mailto:ricardo@nauva.ai"
          className="mt-8 inline-block rounded-none border border-white bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-transparent hover:text-white"
        >
          ricardo@nauva.ai
        </a>
      </div>
    </section>
  );
}
