import { ArrowRight, Building2, TrendingUp, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "The XDC Network is a groundbreaking blockchain with impressive speed, scalability, low fees, and military-grade security. Using XDC Network, businesses can improve their record keeping, exchange data and transfer assets more efficiently and more securely.",
      ctaText: "Explore Enterprise Solutions",
      href: "#enterprise"
    },
    {
      icon: TrendingUp,
      title: "Trade Finance",
      description: "The XDC Network sets a benchmark for digitizing trade finance by enabling the tokenization of diverse trade finance instruments and assets.",
      ctaText: "Explore TradeFi",
      href: "#tradefi"
    },
    {
      icon: Code,
      title: "Developers & Creators",
      description: "The XDC Network is an enterprise-grade, open-source and EVM-compatible Layer 1 blockchain. Geared to accommodate any EVM tool set, developers can carry their skills from other chains onto the XDC Network.",
      ctaText: "Start creating with XDC",
      href: "#developers"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Get Started <span className="text-primary italic">With XDC</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-glow transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                  <solution.icon className="w-8 h-8 text-primary relative z-10" />
                  <div className="absolute inset-0 bg-primary/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                </div>
                <CardTitle className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {solution.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group/btn relative overflow-hidden"
                  asChild
                >
                  <a href={solution.href}>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {solution.ctaText}
                      <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* VR Headset Visual Element (placeholder for the image from original) */}
        <div className="mt-24 text-center">
          <div className="relative inline-block">
            <div className="w-64 h-64 mx-auto bg-gradient-primary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-lg border-2 border-primary/30 flex items-center justify-center">
                <Code className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;