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
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Enhanced Background Clock Animation - Large but Very Translucent */}
      <div className="absolute inset-0 flex items-center justify-center opacity-3">
        <div className="relative w-[600px] h-[600px]">
          {/* Outer rings with very subtle effects */}
          <div className="absolute inset-0 border-2 border-primary/8 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-8 border border-primary/6 rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-16 border border-primary/4 rounded-full animate-pulse"></div>
          <div className="absolute inset-24 border border-primary/3 rounded-full"></div>

          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-12 bg-primary/8"
              style={{
                top: "20px",
                left: "50%",
                transformOrigin: "50% 280px",
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* Numbers around the clock */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-primary/10 text-2xl font-bold"
              style={{
                top: "50px",
                left: "50%",
                transformOrigin: "50% 250px",
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            >
              <span
                style={{
                  transform: `rotate(${-i * 30}deg)`,
                  display: "inline-block",
                }}
              >
                {i === 0 ? 12 : i}
              </span>
            </div>
          ))}

          {/* Clock center */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(46,184,46,0.1)]"></div>

          {/* Clock hands properly sized and animated */}
          <div className="absolute top-1/2 left-1/2 w-2 h-40 bg-gradient-to-t from-primary/15 to-primary/5 transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin-slow rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-32 bg-gradient-to-t from-primary/12 to-primary/4 transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin rounded-full"></div>
          <div
            className="absolute top-1/2 left-1/2 w-0.5 h-36 bg-red-500/8 transform -translate-x-1/2 -translate-y-full origin-bottom animate-spin rounded-full"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Altibbe story timeline -<br />
            <span className="text-primary">Empathizing with Humanity</span>
          </h2>
        </AnimatedText>

        {/* Timeline Tree - Based on Reference Image */}
        <div className="relative">
          {/* Tree Trunk - More realistic brown trunk */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-amber-800 via-amber-900 to-amber-950 rounded-t-full rounded-b-lg shadow-lg"
            style={{
              width: "24px",
              height: "calc(100% - 100px)",
              top: "100px",
              background:
                "linear-gradient(180deg, #92400e 0%, #78350f 50%, #451a03 100%)",
            }}
          >
            {/* Tree bark texture */}
            <div className="absolute inset-0 opacity-30">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-amber-700/40 to-transparent"></div>
              <div className="absolute top-1/4 left-0 w-full h-1 bg-amber-700/60"></div>
              <div className="absolute top-2/4 left-0 w-full h-1 bg-amber-700/60"></div>
              <div className="absolute top-3/4 left-0 w-full h-1 bg-amber-700/60"></div>
            </div>
          </div>

          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <AnimatedText key={index} delay={index * 200}>
                <div
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}
                  >
                    <div className="space-y-6">
                      <div
                        className="text-5xl md:text-6xl font-bold text-primary"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {item.year}
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-semibold text-foreground leading-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-muted-foreground leading-relaxed text-base"
                        style={{ fontFamily: "PT Sans, sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Tree Branch connecting to trunk */}
                  <div className="relative flex items-center justify-center">
                    {/* Main branch extending from trunk */}
                    <div
                      className={`absolute h-3 bg-gradient-to-r ${index % 2 === 0 ? "from-amber-800 to-amber-700" : "from-amber-700 to-amber-800"} rounded-full`}
                      style={{
                        width: "80px",
                        left: index % 2 === 0 ? "-40px" : "-40px",
                        background:
                          index % 2 === 0
                            ? "linear-gradient(90deg, #92400e 0%, #a16207 100%)"
                            : "linear-gradient(270deg, #92400e 0%, #a16207 100%)",
                      }}
                    ></div>

                    {/* Secondary smaller branches */}
                    <div
                      className={`absolute w-8 h-1 bg-amber-700 rounded-full ${index % 2 === 0 ? "-right-3" : "-left-3"} rotate-45`}
                      style={{ top: "-8px" }}
                    ></div>
                    <div
                      className={`absolute w-6 h-1 bg-amber-700 rounded-full ${index % 2 === 0 ? "-right-2" : "-left-2"} -rotate-45`}
                      style={{ top: "8px" }}
                    ></div>

                    {/* Timeline dot/node */}
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg relative border-4 border-background">
                        <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20"></div>
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/80 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              </AnimatedText>
            ))}
          </div>

          {/* Tree Crown/Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div
              className="w-16 h-16 rounded-full shadow-xl relative"
              style={{
                background:
                  "radial-gradient(circle, #15803d 0%, #166534 50%, #14532d 100%)",
              }}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
              {/* Tree crown texture */}
              <div className="absolute inset-2 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-8 bg-white/30 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-3 bg-white/30 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            </div>
          </div>

          {/* Tree roots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
            <div className="relative">
              {/* Root spread */}
              <div
                className="absolute w-20 h-2 bg-amber-900 rounded-full transform -rotate-12"
                style={{ left: "-10px", top: "5px" }}
              ></div>
              <div
                className="absolute w-16 h-2 bg-amber-900 rounded-full transform rotate-12"
                style={{ right: "-8px", top: "5px" }}
              ></div>
              <div
                className="absolute w-12 h-1 bg-amber-800 rounded-full transform -rotate-45"
                style={{ left: "-20px", top: "10px" }}
              ></div>
              <div
                className="absolute w-10 h-1 bg-amber-800 rounded-full transform rotate-45"
                style={{ right: "-15px", top: "10px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
