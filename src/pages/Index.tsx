import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
