export default function Video() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8432E]">
          Vídeo
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
          Chapa Canelada à medida
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#3D4A59]">
          Vídeo do nosso canal oficial de YouTube.
        </p>
        <div className="relative mx-auto mt-8 aspect-video overflow-hidden rounded-lg border border-[#1D2733]/10 shadow-lg">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/azy_hOYy1xI"
            title="Chapa Canelada à medida — GOMAT® Gonçalves & Matias, Lda"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
