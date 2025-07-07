import Header from "@/components/Header";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";
import PhoneBackground from "@/components/PhoneBackground";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <PhoneBackground />
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <AnimatedText delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={600}>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Get in touch with our team to learn more about our health
                innovation solutions and how we can help transform your
                business.
              </p>
            </AnimatedText>
          </div>
        </section>
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
