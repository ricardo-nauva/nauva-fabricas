import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10">
        <div className="relative h-12 w-40">
          <Image
            src="/logo_nauva.png"
            alt="Nauva"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Nauva. Sites para indústria.
        </p>
      </div>
    </footer>
  );
}
