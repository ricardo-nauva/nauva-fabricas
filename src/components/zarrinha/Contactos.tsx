const ASSUNTOS = [
  "Pedido de Orçamento", "Pedido de Encomenda", "Serviço Pós-Venda",
  "Tesouraria", "Faturação", "Qualidade/Ambiente", "Outros",
];

export default function Contactos() {
  return (
    <section id="contactos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 border-b-2 border-neutral-900 pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            Contactos
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="border-2 border-neutral-900 p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007d32]">
                Sede
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Rua da Lavoura, 314 – Apart. 19
                <br />
                4536-906 Paços de Brandão, Portugal
              </p>
            </div>

            <div className="border-2 border-neutral-900 p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007d32]">
                Instalações Fabris
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Rua da Estação, 26
                <br />
                4520-467 Rio Meão, Portugal
              </p>
            </div>

            <div className="border-2 border-neutral-900 p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007d32]">
                Delegação Lisboa
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Rua Leite de Vasconcelos, 7 – 1º Dir.
                <br />
                1170-197 Lisboa, Portugal
              </p>
            </div>

            <div className="border-2 border-neutral-900 p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#007d32]">
                Telefone &amp; Horário
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                (+351) 227 472 070 <span className="text-neutral-500">(chamada para a rede fixa nacional)</span>
                <br />
                Segunda a Sexta, 09h00–18h00
              </p>
            </div>
          </div>

          <div className="border-2 border-neutral-900 p-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900">
              Pedido de Contacto
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Preencha o formulário no site oficial ou contacte-nos por telefone
              indicando o assunto pretendido:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {ASSUNTOS.map((a) => (
                <span
                  key={a}
                  className="border border-neutral-300 bg-[#F7F7F3] px-3 py-1.5 text-xs font-medium text-neutral-700"
                >
                  {a}
                </span>
              ))}
            </div>
            <a
              href="tel:+351227472070"
              className="mt-8 block w-full border-2 border-neutral-900 bg-[#007d32] px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-900"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
