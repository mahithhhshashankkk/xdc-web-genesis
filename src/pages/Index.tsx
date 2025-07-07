import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

interface IndexProps {
  onNavigate?: (path: string) => void;
  isTransitioning?: boolean;
}

const Index = ({ onNavigate, isTransitioning }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header
        onLogoClick={() => onNavigate?.("/")}
        isTransitioning={isTransitioning}
      />
      <section id="hero">
        <HeroSection />
      </section>
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
