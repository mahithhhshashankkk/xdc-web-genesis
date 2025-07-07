import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const SocialMediaSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Connect with <span className="text-primary">Altibbe</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Join our community of health-conscious individuals and businesses.
            Stay updated with the latest in health innovation and sustainable
            practices.
          </p>

          <Button
            variant="cta"
            size="lg"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
          </Button>
        </AnimatedText>
      </div>
    </section>
  );
};

export default SocialMediaSection;
