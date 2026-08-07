import type { Metadata } from "next";
import Header from "@/components/zarrinha/Header";
import Hero from "@/components/zarrinha/Hero";
import Historia from "@/components/zarrinha/Historia";
import SobreNos from "@/components/zarrinha/SobreNos";
import Produtos from "@/components/zarrinha/Produtos";
import Certificacoes from "@/components/zarrinha/Certificacoes";
import Sustentabilidade from "@/components/zarrinha/Sustentabilidade";
import Sectores from "@/components/zarrinha/Sectores";
import Contactos from "@/components/zarrinha/Contactos";
import Footer from "@/components/zarrinha/Footer";

export const metadata: Metadata = {
  title: "Zarrinha S.A. | Fábrica de Papel e Cartão Canelado",
  description:
    "Mais de 60 anos de experiência no desenvolvimento de soluções de embalagens de cartão canelado. Paços de Brandão, Portugal.",
};

export default function ZarrinhaPage() {
  return (
    <div className="flex flex-1 flex-col bg-[#F7F7F3]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Historia />
        <SobreNos />
        <Produtos />
        <Certificacoes />
        <Sustentabilidade />
        <Sectores />
        <Contactos />
      </main>
      <Footer />
    </div>
  );
}
