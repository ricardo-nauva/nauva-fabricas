"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#historia", label: "Quem Somos" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sustentabilidade", label: "Sustentabilidade" },
  { href: "#contactos", label: "Contactos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-neutral-900 bg-[#F7F7F3]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/zarrinha/logo.svg" alt="Zarrinha" width={140} height={44} priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-700 transition-colors hover:text-[#007d32]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contactos"
            className="border-2 border-neutral-900 bg-[#007d32] px-5 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-900"
          >
            Pedir Orçamento
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-neutral-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-neutral-900 bg-[#F7F7F3] lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-neutral-200 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-neutral-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contactos"
              onClick={() => setOpen(false)}
              className="mt-3 border-2 border-neutral-900 bg-[#007d32] px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-white"
            >
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
