import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download, BookOpen } from "lucide-react";

// Image Hover Animation Section
const ImageHoverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-xdc-dark/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-xdc-cyan/10 to-primary/5 p-2">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F175e07c0953248be8def67c5d8e27247%2F9dac1cf560d446aa83ae5d63cd9af7e2?format=webp&width=800"
                  alt="XDC Network Technology"
                  className="w-full h-[500px] object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-xdc-cyan/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-xdc-cyan/50 transition-all duration-500"></div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-3 h-3 bg-xdc-cyan rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform -translate-x-4 group-hover:translate-x-0">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-20 h-20 bg-xdc-cyan/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-xdc-cyan/30 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play
                      className="w-8 h-8 text-xdc-cyan ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-xdc-cyan/20 via-primary/10 to-xdc-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Get Started Section
const GetStartedSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Download Wallet",
      description:
        "Get started with XDC by downloading a compatible wallet to store and manage your XDC tokens securely.",
    },
    {
      icon: BookOpen,
      title: "Learn the Basics",
      description:
        "Understand XDC Network fundamentals, consensus mechanisms, and how to interact with the ecosystem.",
    },
    {
      icon: Play,
      title: "Start Building",
      description:
        "Deploy your first smart contract or integrate XDC Network into your existing applications.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-xdc-dark/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Started with{" "}
              <span className="text-xdc-cyan">XDC Network</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the future of enterprise blockchain. Start building on XDC
              Network today with our comprehensive developer tools and
              resources.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:border-xdc-cyan/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-xdc-cyan/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-xdc-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-xdc-cyan rounded-full flex items-center justify-center text-sm font-bold text-xdc-dark">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              Start Building
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-xdc-cyan/30 hover:border-xdc-cyan hover:bg-xdc-cyan/10 transition-all duration-300"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ImageHoverSection />
      <GetStartedSection />
      <SolutionsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
