"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre-nos", label: "Sobre Nós" },
  { href: "#produtos", label: "Produtos" },
  { href: "#personalizacao", label: "Personalização" },
  { href: "#contactos", label: "Contactos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#3A2A1F]/15 bg-[#FAF6F0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-fraunces)] text-xl font-semibold tracking-tight text-[#3A2A1F]"
        >
          Fábrica das Mesas
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5C4433] transition-colors hover:text-[#B8683A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contactos"
            className="rounded-full bg-[#B8683A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8B4A2B]"
          >
            Pedir Orçamento
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-[#3A2A1F] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#3A2A1F]/15 bg-[#FAF6F0] lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#3A2A1F]/10 py-3 text-sm font-medium text-[#5C4433]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contactos"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[#B8683A] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
