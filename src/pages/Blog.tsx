import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionary Health Transparency in Modern Agriculture",
      excerpt:
        "Exploring how blockchain technology is transforming farm-to-table transparency and consumer trust in organic products.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Agriculture",
      icon: "🌱",
    },
    {
      id: 2,
      title: "The Future of Organic Certification: Digital Solutions",
      excerpt:
        "How digital platforms are revolutionizing organic certification processes and making healthy food more accessible to consumers worldwide.",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Innovation",
      icon: "🏆",
    },
    {
      id: 3,
      title: "Global Health Markets: Trends and Opportunities",
      excerpt:
        "Analyzing emerging trends in international health markets and identifying opportunities for sustainable business growth.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Market Analysis",
      icon: "🌍",
    },
    {
      id: 4,
      title: "Consumer Health Consciousness: The New Market Reality",
      excerpt:
        "Understanding the shift toward health-conscious consumption and its impact on traditional food and wellness industries.",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "Consumer Trends",
      icon: "💚",
    },
    {
      id: 5,
      title: "Digital Health Reporting: Best Practices for 2025",
      excerpt:
        "Essential strategies for implementing effective digital health reporting systems that enhance transparency and consumer confidence.",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      category: "Technology",
      icon: "📊",
    },
    {
      id: 6,
      title: "Sustainable Wellness: Building Tomorrow's Health Ecosystem",
      excerpt:
        "Creating sustainable wellness ecosystems that benefit consumers, producers, and the environment through innovative health solutions.",
      date: "Dec 3, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      icon: "🌿",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedText className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Latest Health <span className="text-primary">Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Stay informed with the latest developments in health technology,
            organic agriculture, and sustainable wellness practices.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <AnimatedText
              key={post.id}
              delay={index * 100}
              className="group cursor-pointer"
            >
              <article className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{post.icon}</div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                  <span className="relative">
                    {post.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="bg-muted px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText className="text-center" delay={600}>
          <Button
            variant="cta"
            size="lg"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2" />
              <span>View All Posts</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
          </Button>
        </AnimatedText>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <AnimatedText delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                Health <span className="text-primary">Blog</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={600}>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Discover the latest insights, trends, and innovations in health
                technology, organic agriculture, and sustainable wellness
                practices.
              </p>
            </AnimatedText>
          </div>
        </section>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
