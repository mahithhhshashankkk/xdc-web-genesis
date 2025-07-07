import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const TransparencySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedText>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
                Transparency Reporting &<br />
                <span className="text-primary">On-Site Verification</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Hedamo, a proud sub-brand of Altibbe Inc., a Global Pioneer is
                dedicated to setting the benchmark for transparency reporting,
                holistic health review across Organic Farms, Food Producers and
                Natural Product innovators.
              </p>
            </AnimatedText>

            <div className="space-y-6">
              <AnimatedText delay={200}>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center mr-3">
                      1
                    </span>
                    Consulting for Organic Farms:
                  </h3>
                  <p className="text-muted-foreground ml-9">
                    Tailored strategies for organic farms and food producers to
                    overcome challenges and seize opportunities.
                  </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={400}>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center mr-3">
                      2
                    </span>
                    Health-Centered Product Reporting:
                  </h3>
                  <p className="text-muted-foreground ml-9">
                    Reporting and strategic guidance on product innovation,
                    differentiation and maintaining unique value propositions.
                  </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={600}>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center mr-3">
                      3
                    </span>
                    Global Market Access:
                  </h3>
                  <p className="text-muted-foreground ml-9">
                    Facilitating entry into international markets with strategic
                    partnerships, unlocking trade and growth opportunities.
                  </p>
                </div>
              </AnimatedText>
            </div>

            <AnimatedText delay={800}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
                  <span>JOIN WAITLIST</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </AnimatedText>
          </div>

          {/* Image */}
          <div className="relative">
            <AnimatedText delay={300} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop"
                  alt="Organic farming landscape"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
