import Header from "@/components/hub/Header";
import Hero from "@/components/hub/Hero";
import Problema from "@/components/hub/Problema";
import ComoFunciona from "@/components/hub/ComoFunciona";
import Servicos from "@/components/hub/Servicos";
import ParaQuemE from "@/components/hub/ParaQuemE";
import FAQ from "@/components/hub/FAQ";
import CTA from "@/components/hub/CTA";
import Footer from "@/components/hub/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problema />
        <ComoFunciona />
        <Servicos />
        <ParaQuemE />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
