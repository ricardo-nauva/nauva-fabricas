import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-neutral-900 bg-neutral-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Image src="/zarrinha/logo.svg" alt="Zarrinha" width={110} height={35} />
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          © {new Date().getFullYear()} Zarrinha S.A. — Fábrica de Papel e Cartão
        </p>
      </div>
    </footer>
  );
}
