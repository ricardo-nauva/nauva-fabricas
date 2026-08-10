export default function Contactos() {
  return (
    <section id="contactos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8622C]">
            Contactos
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-extrabold uppercase text-[#1D2733] sm:text-4xl">
            Fale connosco
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#1D4E89]">
                Morada
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
                Zona Industrial de Vagos, lote 117
                <br />
                3840-385 Vagos, Aveiro, Portugal
              </p>
            </div>

            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#1D4E89]">
                Telefone
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">+351 234 781 938</p>
              <p className="mt-1 text-xs text-[#3D4A59]/70">Chamada para rede fixa nacional</p>
            </div>

            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#1D4E89]">
                Email
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">geral@gomat.pt</p>
            </div>

            <div className="rounded-lg border border-[#1D2733]/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#1D4E89]">
                Horário
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
                8h30 – 13h00
                <br />
                14h00 – 17h30
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[#1D2733]/10 bg-[#F4F5F7] p-8">
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-[#1D2733]">
              Pedidos de cotação
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3D4A59]">
              Envie-nos o seu pedido por email ou através da cotação online. Não
              fornecemos preços por telefone, mas comprometemo-nos a responder
              brevemente a todas as solicitações.
            </p>
            <a
              href="mailto:geral@gomat.pt"
              className="mt-8 block w-full rounded bg-[#1D4E89] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#153B68]"
            >
              Enviar Email
            </a>
            <a
              href="tel:+351234781938"
              className="mt-3 block w-full rounded border border-[#1D2733]/25 px-6 py-3.5 text-center text-sm font-semibold text-[#1D2733] transition-colors hover:border-[#1D2733]/50"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
