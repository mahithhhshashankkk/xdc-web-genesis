import { ArrowRight, Building2, TrendingUp, Code, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Animated Text Component for Solutions
const AnimatedText = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      default:
        return "translateY(30px)";
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
          "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "opacity, transform",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
};

// Animated Icon Component
const AnimatedIcon = ({ icon: Icon, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "scale(1) rotate(0deg)"
          : "scale(0.8) rotate(-10deg)",
        transition:
          "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "opacity, transform",
      }}
    >
      <Icon className="w-12 h-12 text-xdc-cyan" />
    </div>
  );
};

// Full-Screen Enterprise Slide
const EnterpriseSlide = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-xdc-dark/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-xdc-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-xdc-cyan rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:flex lg:items-center lg:gap-16">
          {/* Icon */}
          <AnimatedIcon
            icon={Building2}
            delay={0}
            className="mb-8 lg:mb-0 lg:flex-shrink-0"
          >
            <div className="w-24 h-24 mx-auto lg:mx-0 bg-gradient-to-br from-xdc-cyan/20 to-primary/10 rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-500 cursor-pointer"></div>
          </AnimatedIcon>

          {/* Content */}
          <div className="lg:flex-1">
            <div className="mb-8">
              <AnimatedText delay={200} direction="right">
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <Diamond className="w-3 h-3 text-xdc-cyan" />
                  <span className="text-sm font-medium text-xdc-cyan tracking-wider uppercase">
                    Enterprise
                  </span>
                </div>
              </AnimatedText>
              <AnimatedText delay={400} direction="up">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed text-foreground font-light">
                  XDC Network is an enterprise-grade, open-source blockchain
                  protocol. An EVM-compatible chain with smart contract
                  capabilities, it is uniquely suited to revolutionize,
                  decentralize, and liquify the enterprise industry through the
                  tokenization of real-world assets and business processes.
                </p>
              </AnimatedText>
            </div>

            {/* CTA Buttons */}
            <AnimatedText delay={600} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-transparent border border-white/20 hover:border-xdc-cyan hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group relative overflow-hidden text-xdc-cyan hover:text-black hover:-translate-y-1"
                  style={{
                    transition:
                      "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
                    <span>Explore the Network</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-xdc-cyan/30 hover:border-xdc-cyan hover:bg-xdc-cyan/10 transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Diamond className="mr-2 w-4 h-4" />
                  What is Blockchain?
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

// Full-Screen Trade Finance Slide
const TradeFinanceSlide = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-xdc-dark/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-xdc-cyan rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:flex lg:items-center lg:gap-16">
          {/* Icon */}
          <AnimatedIcon
            icon={TrendingUp}
            delay={0}
            className="mb-8 lg:mb-0 lg:flex-shrink-0"
          >
            <div className="w-24 h-24 mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-xdc-cyan/10 rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-500 cursor-pointer"></div>
          </AnimatedIcon>

          {/* Content */}
          <div className="lg:flex-1">
            <div className="mb-8">
              <AnimatedText delay={200} direction="right">
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <Diamond className="w-3 h-3 text-primary" />
                  <span className="text-sm font-medium text-primary tracking-wider uppercase">
                    Trade Finance
                  </span>
                </div>
              </AnimatedText>
              <AnimatedText delay={400} direction="up">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed text-foreground font-light">
                  XDC Network sets a benchmark for digitizing trade finance by
                  enabling the tokenization of diverse trade finance instruments
                  and assets. Transform traditional trading with
                  blockchain-powered efficiency, transparency, and global
                  accessibility.
                </p>
              </AnimatedText>
            </div>

            {/* CTA Buttons */}
            <AnimatedText delay={600} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-transparent border border-white/20 hover:border-primary hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group relative overflow-hidden text-primary hover:text-black hover:-translate-y-1"
                  style={{
                    transition:
                      "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
                    <span>Explore TradeFi</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <TrendingUp className="mr-2 w-4 h-4" />
                  Learn More
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

// Full-Screen Developers & Creators Slide
const DevelopersSlide = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-xdc-dark/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-xdc-cyan rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/5 right-1/5 w-1 h-1 bg-primary rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-xdc-cyan rounded-full animate-pulse delay-1800"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:flex lg:items-center lg:gap-16">
          {/* Icon */}
          <AnimatedIcon
            icon={Code}
            delay={0}
            className="mb-8 lg:mb-0 lg:flex-shrink-0"
          >
            <div className="w-24 h-24 mx-auto lg:mx-0 bg-gradient-to-br from-xdc-cyan/20 to-primary/20 rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-500 cursor-pointer"></div>
          </AnimatedIcon>

          {/* Content */}
          <div className="lg:flex-1">
            <div className="mb-8">
              <AnimatedText delay={200} direction="right">
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <Diamond className="w-3 h-3 text-xdc-cyan" />
                  <span className="text-sm font-medium text-xdc-cyan tracking-wider uppercase">
                    Developers & Creators
                  </span>
                </div>
              </AnimatedText>
              <AnimatedText delay={400} direction="up">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-light">
                  XDC Network is an enterprise-grade, open-source and
                  EVM-compatible Layer 1 blockchain. Geared to accommodate any
                  EVM tool set, developers can carry their skills from other
                  chains onto the XDC Network and start building immediately.
                </p>
              </AnimatedText>
            </div>

            {/* CTA Buttons */}
            <AnimatedText delay={600} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-transparent border border-white/20 hover:border-xdc-cyan hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group relative overflow-hidden text-xdc-cyan hover:text-black hover:-translate-y-1"
                  style={{
                    transition:
                      "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
                    <span>Start Creating with XDC</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-xdc-cyan/30 hover:border-xdc-cyan hover:bg-xdc-cyan/10 transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Code className="mr-2 w-4 h-4" />
                  Documentation
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  return (
    <>
      <EnterpriseSlide />
      <TradeFinanceSlide />
      <DevelopersSlide />
    </>
  );
};

export default SolutionsSection;
