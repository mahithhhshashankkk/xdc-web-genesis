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
    <section className="relative h-screen bg-gradient-hero overflow-hidden pt-24">
      {/* 3D Animated Background */}
      <HeroBackground3D />

      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-15"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col justify-center h-full">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Hero Text */}
          <AnimatedHeroText delay={300}>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-foreground leading-tight mb-8"
              style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Pioneering Health
              <br />
              <span className="text-primary font-normal">Innovation</span>
            </h1>
          </AnimatedHeroText>

          {/* Subtitle */}
          <AnimatedHeroText delay={600}>
            <p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Leadership in the health industry through innovation,
              partnerships, and sustainability, empowering virtuous producers to
              achieve global recognition and quality.
            </p>
          </AnimatedHeroText>

          {/* CTA Button */}
          <AnimatedHeroText delay={900}>
            <div className="flex justify-center items-center">
              <Button
                size="xl"
                className="bg-transparent border border-primary/30 hover:border-primary hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group relative overflow-hidden text-primary hover:text-white px-8 py-4 text-lg hover:-translate-y-1"
                style={{
                  transition:
                    "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                }}
              >
                <span className="relative z-10 flex items-center gap-4">
                  <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </Button>
            </div>
          </AnimatedHeroText>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
