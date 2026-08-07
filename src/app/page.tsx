import Header from "@/components/hub/Header";
import Hero from "@/components/hub/Hero";
import Servicos from "@/components/hub/Servicos";
import CTA from "@/components/hub/CTA";
import Footer from "@/components/hub/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Servicos />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
