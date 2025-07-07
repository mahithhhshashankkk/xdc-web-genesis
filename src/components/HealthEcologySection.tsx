import AnimatedText from "@/components/AnimatedText";

const HealthEcologySection = () => {
  const categories = [
    {
      name: "Agriculture Products",
      icon: "🌾",
      description: "Organic farms and sustainable agriculture",
    },
    {
      name: "Fruits & Vegetables",
      icon: "🍎",
      description: "Fresh, locally sourced produce",
    },
    {
      name: "Meat/Seafood & Dairy",
      icon: "🥩",
      description: "Ethically sourced proteins",
    },
    {
      name: "Fashion",
      icon: "👕",
      description: "Sustainable and ethical fashion",
    },
    {
      name: "Beauty",
      icon: "💄",
      description: "Natural and organic beauty products",
    },
    {
      name: "Wellness",
      icon: "🧘",
      description: "Holistic health and wellness solutions",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Altibbe Inc <span className="text-primary">Health Ecology</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Discover transparent health solutions across multiple categories,
            connecting you with trusted sources for a healthier lifestyle.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <AnimatedText
              key={index}
              delay={index * 100}
              className="group cursor-pointer"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthEcologySection;
