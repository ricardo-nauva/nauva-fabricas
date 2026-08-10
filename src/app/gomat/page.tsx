import type { Metadata } from "next";
import { barlowCondensed } from "@/components/gomat/fonts";
import Header from "@/components/gomat/Header";
import Hero from "@/components/gomat/Hero";
import SobreEmpresa from "@/components/gomat/SobreEmpresa";
import Produtos from "@/components/gomat/Produtos";
import Profissionais from "@/components/gomat/Profissionais";
import Certificacoes from "@/components/gomat/Certificacoes";
import CotacaoOnline from "@/components/gomat/CotacaoOnline";
import Contactos from "@/components/gomat/Contactos";
import Footer from "@/components/gomat/Footer";

export const metadata: Metadata = {
  title: "GOMAT® | Chapas para Coberturas e Fachadas desde 1981",
  description:
    "Fabrico e comércio de chapas para coberturas e fachadas, perfis e remates. Empresa familiar em Vagos, Aveiro, com mais de 40 anos de experiência.",
};

export default function GomatPage() {
  return (
    <div className={`${barlowCondensed.variable} flex flex-1 flex-col bg-[#F4F5F7]`}>
      <Header />
      <main className="flex-1">
        <Hero />
        <SobreEmpresa />
        <Produtos />
        <Profissionais />
        <Certificacoes />
        <CotacaoOnline />
        <Contactos />
      </main>
      <Footer />
    </div>
  );
}
