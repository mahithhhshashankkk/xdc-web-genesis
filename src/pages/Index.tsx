import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TransparencySection from "@/components/TransparencySection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <TransparencySection />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default Index;
