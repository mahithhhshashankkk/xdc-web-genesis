import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
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
            Discover a low cost, fast and reliable blockchain built for everyone — a network of possibilities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="group">
              Get started with XDC
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Additional info */}
          <div className="pt-12 text-center">
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              XDC Network is an enterprise-grade, open-source blockchain protocol. An EVM-compatible chain with smart contract capabilities, it is uniquely suited to revolutionize, decentralize, and liquify the trade finance industry through the tokenization of real-world assets and financial instruments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg">
                Explore the Network
              </Button>
              <Button variant="link" className="text-primary">
                What is a blockchain?
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