import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Full-Screen Image Section with Triangular Slide Animation
const ImageHoverSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0); // 0: hidden, 1: triangle, 2: full
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Start triangle animation immediately
            setTimeout(() => setAnimationPhase(1), 100);

            // Transition to full image after triangle reaches 30%
            setTimeout(() => setAnimationPhase(2), 1500);
          }
        });
      },
      { threshold: 0.001 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getClipPath = () => {
    switch (animationPhase) {
      case 0:
        return "polygon(50% 100%, 50% 100%, 50% 100%)"; // Hidden
      case 1:
        return "polygon(0% 100%, 50% 0%, 100% 100%)"; // Triangle
      case 2:
        return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"; // Full rectangle
      default:
        return "polygon(50% 100%, 50% 100%, 50% 100%)";
    }
  };

  const getTransform = () => {
    switch (animationPhase) {
      case 0:
        return "translate3d(0, 100%, 0) scale3d(0.8, 0.8, 1)";
      case 1:
        return "translate3d(0, 0%, 0) scale3d(1, 1, 1)";
      case 2:
        return "translate3d(0, 0%, 0) scale3d(1, 1, 1)";
      default:
        return "translate3d(0, 100%, 0) scale3d(0.8, 0.8, 1)";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-xdc-dark/40 to-background"
    >
      {/* Main Image Container */}
      <div className="relative w-full h-full group cursor-pointer">
        <div
          className="absolute inset-0 transition-all duration-[2000ms] ease-out"
          style={{
            clipPath: getClipPath(),
            transform: getTransform(),
            willChange: "clip-path, transform",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F175e07c0953248be8def67c5d8e27247%2F9dac1cf560d446aa83ae5d63cd9af7e2?format=webp&width=1920&quality=90"
            alt="XDC Network Technology"
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            style={{
              willChange: "transform, filter",
              backfaceVisibility: "hidden",
              transform: "translate3d(0, 0, 0)",
            }}
          />

          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-xdc-cyan/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Animated Border Glow */}
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-xdc-cyan/40 transition-all duration-500"></div>
        </div>

        {/* Floating Animation Elements */}
        {animationPhase === 2 && (
          <>
            <div
              className="absolute top-1/4 right-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-x-8 group-hover:translate-x-0"
              style={{ willChange: "opacity, transform" }}
            >
              <div className="w-4 h-4 bg-xdc-cyan rounded-full animate-pulse shadow-glow"></div>
            </div>
            <div
              className="absolute bottom-1/3 left-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform -translate-x-8 group-hover:translate-x-0"
              style={{ willChange: "opacity, transform" }}
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-glow"></div>
            </div>
            <div
              className="absolute top-1/3 left-1/3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400 transform translate-y-8 group-hover:translate-y-0"
              style={{ willChange: "opacity, transform" }}
            >
              <div className="w-2 h-2 bg-xdc-cyan rounded-full animate-pulse shadow-glow"></div>
            </div>

            {/* Center Play Button */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
              style={{ willChange: "opacity" }}
            >
              <div
                className="w-24 h-24 bg-xdc-cyan/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-xdc-cyan/40 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-glow"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                <Play
                  className="w-10 h-10 text-xdc-cyan ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
          </>
        )}

        {/* Progress Indicator */}
        {isVisible && animationPhase < 2 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-xdc-cyan rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">
                {animationPhase === 1 ? "Expanding..." : "Loading..."}
              </span>
            </div>
          </div>
        )}

        {/* Outer Glow Effect */}
        {animationPhase === 2 && (
          <div className="absolute -inset-4 bg-gradient-to-r from-xdc-cyan/20 via-primary/10 to-xdc-cyan/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10"></div>
        )}
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
