export default function Contactos() {
  return (
    <section id="contactos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8683A]">
            Contactos
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#3A2A1F]">
            Fale connosco
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#3A2A1F]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B8683A]">
                Morada
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C4433]">
                Avenida de Campos Nº190
                <br />
                4580-646 Vilela, Paredes, Portugal
              </p>
              <p className="mt-2 text-xs text-[#5C4433]/70">
                Visitas à fábrica mediante marcação prévia.
              </p>
            </div>

            <div className="rounded-2xl border border-[#3A2A1F]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B8683A]">
                Telefone
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C4433]">+351 911 790 111</p>
            </div>

            <div className="rounded-2xl border border-[#3A2A1F]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B8683A]">
                Email
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C4433]">geral@fabricadasmesas.pt</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#3A2A1F]/10 bg-[#FAF6F0] p-8">
            <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#3A2A1F]">
              Peça já o seu orçamento
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5C4433]">
              Envie-nos as suas ideias ou dimensões e receba uma proposta grátis,
              sem compromisso. Entregamos em todo o país, incluindo Madeira e Açores.
            </p>
            <a
              href="tel:+351911790111"
              className="mt-8 block w-full rounded-full bg-[#B8683A] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8B4A2B]"
            >
              Ligar Agora
            </a>
            <a
              href="mailto:geral@fabricadasmesas.pt"
              className="mt-3 block w-full rounded-full border border-[#3A2A1F]/25 px-6 py-3.5 text-center text-sm font-semibold text-[#3A2A1F] transition-colors hover:border-[#3A2A1F]/50"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
