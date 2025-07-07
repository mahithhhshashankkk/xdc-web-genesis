import Header from "@/components/Header";
import ImageHoverSection from "@/components/ImageHoverSection";
import HealthEcologySection from "@/components/HealthEcologySection";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";
import NatureBackground from "@/components/NatureBackground";

const Hedamo = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <NatureBackground />
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <AnimatedText delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                <span className="text-primary">Hedamo</span> Health Platform
              </h1>
            </AnimatedText>
            <AnimatedText delay={600}>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Revolutionary health transparency platform connecting consumers
                with organic farms, health reviews, and transparency labels for
                a healthier future.
              </p>
            </AnimatedText>
          </div>
        </section>
        <ImageHoverSection />
        <HealthEcologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Hedamo;
