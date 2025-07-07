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
      {/* Enhanced Background Clock Animation - Smaller and More Translucent */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="relative w-[300px] h-[300px]">
          {/* Outer rings with subtle glow */}
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow shadow-[0_0_20px_rgba(46,184,46,0.1)]"></div>
          <div className="absolute inset-6 border border-primary/15 rounded-full animate-spin-reverse shadow-[0_0_15px_rgba(46,184,46,0.08)]"></div>
          <div className="absolute inset-12 border border-primary/10 rounded-full animate-pulse"></div>

          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-6 bg-primary/15"
              style={{
                top: "8px",
                left: "50%",
                transformOrigin: "50% 142px",
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* Clock center */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Clock hands properly sized for smaller clock */}
          <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-primary/20 to-primary/10 transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-t from-primary/15 to-primary/8 transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin"></div>
          <div
            className="absolute top-1/2 left-1/2 w-0.5 h-22 bg-red-500/10 transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin"
            style={{ animationDuration: "1s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Altibbe story timeline -<br />
            <span className="text-primary">Empathizing with Humanity</span>
          </h2>
        </AnimatedText>

        {/* Timeline Tree */}
        <div className="relative">
          {/* Tree Trunk */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-4 bg-gradient-to-b from-primary/80 via-primary to-primary/60 rounded-full"
            style={{ height: "100%", top: "10%" }}
          >
            {/* Tree rings */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent rounded-full"></div>
          </div>

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

                  {/* Tree Branch and Leaf */}
                  <div className="relative flex items-center justify-center">
                    {/* Branch extending from trunk */}
                    <div
                      className={`absolute w-16 h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-primary to-primary/60 -left-8" : "from-primary/60 to-primary -right-8"} rounded-full`}
                    ></div>

                    {/* Leaf/Node */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg relative">
                        <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-30"></div>
                        {/* Leaf veins */}
                        <div className="absolute inset-1 border border-white/30 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-1 h-4 bg-white/40 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                      </div>

                      {/* Small branches */}
                      <div
                        className={`absolute top-1/2 ${index % 2 === 0 ? "-right-2" : "-left-2"} w-3 h-0.5 bg-primary/60 transform -translate-y-1/2 rotate-45`}
                      ></div>
                      <div
                        className={`absolute top-1/2 ${index % 2 === 0 ? "-right-2" : "-left-2"} w-3 h-0.5 bg-primary/60 transform -translate-y-1/2 -rotate-45`}
                      ></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              </AnimatedText>
            ))}
          </div>

          {/* Tree Crown */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full shadow-lg relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 border-2 border-white/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-6 bg-white/40 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-6 h-2 bg-white/40 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
