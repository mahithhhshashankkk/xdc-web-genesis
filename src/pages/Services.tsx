import Header from "@/components/Header";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";

interface ServicesProps {
  onNavigate?: (path: string) => void;
  isTransitioning?: boolean;
}

const Services = ({ onNavigate, isTransitioning }: ServicesProps) => {
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Comprehensive health industry solutions including farm consulting,
              health reporting, and global market access to transform your
              business.
            </p>
          </div>
        </section>
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
