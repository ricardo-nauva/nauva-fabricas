import type { Metadata } from "next";
import { fraunces } from "@/components/fabrica-das-mesas/fonts";
import Header from "@/components/fabrica-das-mesas/Header";
import Hero from "@/components/fabrica-das-mesas/Hero";
import SobreNos from "@/components/fabrica-das-mesas/SobreNos";
import Produtos from "@/components/fabrica-das-mesas/Produtos";
import Personalizacao from "@/components/fabrica-das-mesas/Personalizacao";
import FabricoNacional from "@/components/fabrica-das-mesas/FabricoNacional";
import Contactos from "@/components/fabrica-das-mesas/Contactos";
import Footer from "@/components/fabrica-das-mesas/Footer";

export const metadata: Metadata = {
  title: "Fábrica das Mesas | Mesas por Medida — Casa & Hotelaria",
  description:
    "Fabricamos mesas altas, baixas, compridas e largas, 100% personalizadas ao seu gosto. Produção 100% nacional, em Vilela, Paredes.",
};

export default function FabricaDasMesasPage() {
  return (
    <div className={`${fraunces.variable} flex flex-1 flex-col bg-[#FAF6F0]`}>
      <Header />
      <main className="flex-1">
        <Hero />
        <SobreNos />
        <Produtos />
        <Personalizacao />
        <FabricoNacional />
        <Contactos />
      </main>
      <Footer />
    </div>
  );
}
