import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground3D from "./HeroBackground3D";
import { useEffect, useRef, useState } from "react";

// Animated Text Component for Hero
const AnimatedHeroText = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Auto-trigger animation for hero section
    setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(40px)";
      case "down":
        return "translateY(-40px)";
      case "left":
        return "translateX(40px)";
      case "right":
        return "translateX(-40px)";
      default:
        return "translateY(40px)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getInitialTransform(),
        transition:
          "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* 3D Animated Background */}
      <HeroBackground3D />

      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Hero Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-tight">
            Success Depends on
            <br />
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent font-normal">
              Your Network
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover a low cost, fast and reliable blockchain built for everyone
            — a network of possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button
              size="xl"
              className="bg-transparent border border-white/20 hover:border-xdc-cyan hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group relative overflow-hidden text-xdc-cyan hover:text-black px-8 py-4 text-lg"
            >
              <span className="relative z-10 flex items-center gap-4">
                <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
                <span>Get started with XDC</span>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </span>
            </Button>
          </div>

          {/* Additional info */}
          <div className="pt-12 text-center">
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              XDC Network is an enterprise-grade, open-source blockchain
              protocol. An EVM-compatible chain with smart contract
              capabilities, it is uniquely suited to revolutionize,
              decentralize, and liquify the trade finance industry through the
              tokenization of real-world assets and financial instruments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Explore the Network</span>
                <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </Button>
              <Button variant="link" className="text-primary relative group">
                <span className="relative">What is a blockchain?</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
