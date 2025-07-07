import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";

const ImageHoverSection = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Transparent Health <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Discover our comprehensive platform connecting you with verified
            organic farms, health transparency, and sustainable wellness
            solutions.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedText delay={200}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Farm-to-Table Transparency
                </h3>
                <p className="text-muted-foreground">
                  Connect directly with certified organic farms and track your
                  food's journey from seed to plate with complete transparency
                  and verification.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={400}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Health Product Reviews
                </h3>
                <p className="text-muted-foreground">
                  Access comprehensive reviews and ratings for health products,
                  backed by scientific research and community feedback.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={600}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Certification Labels
                </h3>
                <p className="text-muted-foreground">
                  Navigate through various health and organic certifications
                  with our transparent labeling system for informed
                  decision-making.
                </p>
              </div>
            </AnimatedText>
          </div>

          <div className="relative">
            <AnimatedText delay={300}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h4 className="text-xl font-semibold text-primary mb-2">
                    Health Ecosystem
                  </h4>
                  <p className="text-muted-foreground">
                    Your gateway to transparent health solutions
                  </p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageHoverSection;
