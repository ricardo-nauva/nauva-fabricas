const LINKS = [
  { href: "#sobre-a-empresa", label: "A Empresa" },
  { href: "#produtos", label: "Produtos" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#contactos", label: "Contactos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1D2733]/15 bg-[#F4F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <span className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-extrabold uppercase tracking-tight text-[#1D2733]">
              GOMAT<span className="text-[#D8432E]">®</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-[#3D4A59]">
              Gonçalves &amp; Matias, Lda — fabrico e comércio de chapas para
              coberturas e fachadas desde 1981.
            </p>
            <a
              href="https://www.youtube.com/@GOMAT1981"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8432E] hover:underline"
            >
              YouTube — @GOMAT1981 →
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#1D2733]">
              Navegação
            </h3>
            <nav className="mt-3 flex flex-col gap-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#3D4A59] transition-colors hover:text-[#D8432E]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#1D2733]">
              Contacto
            </h3>
            <div className="mt-3 space-y-1.5 text-sm text-[#3D4A59]">
              <p>Zona Industrial de Vagos, lote 117</p>
              <p>3840-385 Vagos, Aveiro, Portugal</p>
              <p>
                <a href="tel:+351234781938" className="hover:text-[#D8432E]">
                  +351 234 781 938
                </a>
              </p>
              <p>
                <a href="mailto:geral@gomat.pt" className="hover:text-[#D8432E]">
                  geral@gomat.pt
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1D2733]/10 pt-6 text-center">
          <p className="text-xs uppercase tracking-widest text-[#3D4A59]/60">
            © {new Date().getFullYear()} Gonçalves &amp; Matias, Lda — Vagos, Aveiro
          </p>
        </div>
      </div>
    </footer>
  );
}
