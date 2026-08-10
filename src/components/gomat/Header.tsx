"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre-a-empresa", label: "A Empresa" },
  { href: "#produtos", label: "Produtos" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#contactos", label: "Contactos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1D2733]/15 bg-[#F4F5F7]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-extrabold uppercase tracking-tight text-[#1D2733]"
        >
          GOMAT<span className="text-[#E8622C]">®</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3D4A59] transition-colors hover:text-[#D8432E]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotacao-online"
            className="rounded bg-[#D8432E] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B5321F]"
          >
            Cotação Online
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-[#1D2733] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1D2733]/15 bg-[#F4F5F7] lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#1D2733]/10 py-3 text-sm font-medium text-[#3D4A59]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cotacao-online"
              onClick={() => setOpen(false)}
              className="mt-3 rounded bg-[#D8432E] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Cotação Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
