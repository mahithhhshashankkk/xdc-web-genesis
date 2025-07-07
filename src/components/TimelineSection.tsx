import AnimatedText from "@/components/AnimatedText";

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2020",
      title: "The Beginning: Recognizing A Need for Transparency",
      description:
        "Hedamo was born from a vision to address health and wellness crises brought to light by global events. The lack of transparency in health-focused systems became a challenge that demanded innovative solutions.",
    },
    {
      year: "2021",
      title: "The Revival of Food as Medicine",
      description:
        "Drawing inspiration from ancient wisdom, Hedamo began promoting food as medicine, advocating for nutrition, holistic practices, and well-informed choices. The focus shifted to empowering individuals through the revival of natural, sustainable practices.",
    },
    {
      year: "2023",
      title:
        "Confronting Mistrust and setting standards for Health Transparency",
      description:
        "Hedamo pioneered systems to ensure transparency and trust in health-focused products, leveraging blockchain and advanced analytics. It created a benchmark for evaluating health benefits and production sustainability.",
    },
    {
      year: "2024",
      title: "Empowering Consumers with Transparent Choices",
      description:
        "With QR-enabled labels and in-depth reporting, Hedamo provides consumers with full visibility into the origins, quality, and health benefits of every product, enabling informed decisions and fostering trust.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Clock Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 border-2 border-primary rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border border-primary/50 rounded-full animate-pulse"></div>
          <div className="absolute inset-8 border border-primary/30 rounded-full animate-spin-reverse"></div>
          {/* Clock hands */}
          <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-primary transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-primary/70 transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Altibbe story timeline -<br />
            <span className="text-primary">Empathizing with Humanity</span>
          </h2>
        </AnimatedText>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary to-primary/30"></div>

          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <AnimatedText key={index} delay={index * 200}>
                <div
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <div className="space-y-4">
                      <div className="text-4xl md:text-5xl font-light text-primary">
                        {item.year}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg relative z-10">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
