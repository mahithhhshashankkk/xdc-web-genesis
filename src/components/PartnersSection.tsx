const PartnersSection = () => {
  const partners = [
    { name: "Yieldteq", logo: "YT" },
    { name: "TradeFlow", logo: "TF" },
    { name: "BlockFinance", logo: "BF" },
    { name: "ChainTech", logo: "CT" },
    { name: "CryptoSolutions", logo: "CS" },
    { name: "DigitalAssets", logo: "DA" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light text-foreground mb-2">
            Powered by <span className="text-primary">XDC</span>
          </h3>
          <p className="text-muted-foreground">Trusted by leading organizations worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center w-full h-16 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-glow transform hover:-translate-y-1 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              <div className="text-center relative z-10">
                <div className="text-xl font-bold text-primary mb-1 group-hover:scale-125 transition-all duration-300 group-hover:text-primary-glow">
                  {partner.logo}
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated logos effect */}
        <div className="mt-12 relative overflow-hidden">
          <div className="flex animate-pulse">
            <div className="flex space-x-8 animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-24 h-12 bg-primary/5 rounded border border-primary/20 flex items-center justify-center"
                >
                  <span className="text-primary font-semibold text-sm">
                    {partner.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;