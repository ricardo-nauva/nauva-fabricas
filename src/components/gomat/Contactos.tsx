const CAMPOS = [
  { label: "Nome", type: "text", full: false },
  { label: "Empresa", type: "text", full: false },
  { label: "Email", type: "email", full: false, required: true },
  { label: "Telefone", type: "tel", full: false },
  { label: "Código Postal de Entrega", type: "text", full: false },
  { label: "Prazo de entrega pretendido", type: "text", full: false },
];

export default function Contactos() {
  return (
    <section id="contactos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8432E]">
            Contactos
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
            Fale connosco
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D8432E]">
                Morada
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
                GOMAT® — Gonçalves &amp; Matias, Lda
                <br />
                Zona Industrial de Vagos, lote 117
                <br />
                3840-385 Vagos, Aveiro, Portugal
              </p>
              <a
                href="https://www.google.com/maps?cid=18332490209044575588"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#D8432E] hover:underline"
              >
                Ver no Google Maps e avaliações →
              </a>
            </div>

            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D8432E]">
                Telefone
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">+351 234 781 938</p>
              <p className="mt-1 text-xs text-[#3D4A59]/70">Chamada para rede fixa nacional</p>
            </div>

            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D8432E]">
                Email
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">geral@gomat.pt</p>
            </div>

            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D8432E]">
                Horário
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
                8h30 – 13h00
                <br />
                14h00 – 17h30
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#1D2733]/10">
              <iframe
                title="Localização GOMAT — Zona Industrial de Vagos"
                className="h-64 w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Gon%C3%A7alves+%26+Matias%2C+Lda%2C+Zona+Industrial+de+Vagos%2C+lote+117%2C+3840-385+Vagos&output=embed"
              />
            </div>
          </div>

          <div className="rounded-lg border border-[#1D2733]/10 bg-[#F4F5F7] p-8">
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-[#1D2733]">
              Pedido de cotação online
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
              Preencha os dados abaixo. Não fornecemos preços por telefone, mas
              comprometemo-nos a responder brevemente a todas as solicitações.
            </p>

            <form
              action="mailto:geral@gomat.pt"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {CAMPOS.map((c) => (
                  <label key={c.label} className="block text-xs font-semibold uppercase tracking-widest text-[#1D2733]">
                    {c.label}
                    <input
                      type={c.type}
                      name={c.label}
                      required={c.required}
                      className="mt-1.5 w-full rounded border border-[#1D2733]/20 bg-white px-3 py-2.5 text-sm font-normal normal-case text-[#1D2733] focus:border-[#D8432E] focus:outline-none"
                    />
                  </label>
                ))}
              </div>

              <label className="block text-xs font-semibold uppercase tracking-widest text-[#1D2733]">
                Produto(s) pretendido(s)
                <textarea
                  name="Descrição do pedido"
                  rows={4}
                  placeholder="Modelos, tipo de material, quantidades, comprimentos, espessuras, cores, etc."
                  className="mt-1.5 w-full rounded border border-[#1D2733]/20 bg-white px-3 py-2.5 text-sm font-normal normal-case text-[#1D2733] placeholder:text-[#3D4A59]/50 focus:border-[#D8432E] focus:outline-none"
                />
              </label>

              <label className="flex items-start gap-2 text-xs text-[#3D4A59]">
                <input type="checkbox" required className="mt-0.5" />
                Aceito a Política de Privacidade do site.
              </label>

              <button
                type="submit"
                className="w-full rounded bg-[#D8432E] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B5321F]"
              >
                Enviar Pedido de Cotação
              </button>
              <p className="text-xs text-[#3D4A59]/60">
                O botão abre o seu cliente de email com os dados preenchidos, prontos a enviar para geral@gomat.pt.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
