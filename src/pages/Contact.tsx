import Header from "@/components/Header";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";

interface ContactProps {
  onNavigate?: (path: string) => void;
  isTransitioning?: boolean;
}

const Contact = ({ onNavigate, isTransitioning }: ContactProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header
        onLogoClick={() => onNavigate?.("/")}
        isTransitioning={isTransitioning}
      />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Get in touch with our team to learn more about our health
              innovation solutions and how we can help transform your business.
            </p>
          </div>
        </section>
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
