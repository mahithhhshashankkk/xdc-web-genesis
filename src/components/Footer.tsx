import { Youtube, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="text-3xl font-bold text-primary">ALTIBBE</div>
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              HEALTH WISDOM WITHIN
            </p>
          </div>

          {/* Additional Menu */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg">
              ADDITIONAL MENU
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/hedamo"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  HEDAMO
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  CONTACTS
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg">
              GET A NEWSLETTER
            </h4>
            <p className="text-muted-foreground text-sm">
              Stay updated with our latest insights, updates, and news.
              Subscribe to receive valuable content delivered straight to your
              inbox.
            </p>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="E-mail"
                className="flex-1 bg-muted border-border"
              />
              <Button
                variant="outline"
                className="px-6 border-primary/30 hover:bg-primary/10"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Centered Social Media Section */}
        <div className="flex justify-center space-x-8 pt-12 mt-12 border-t border-border">
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 relative group overflow-hidden w-16 h-16"
          >
            <a href="#" aria-label="YouTube">
              <Youtube className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            asChild
            className="hover:text-sky-400 hover:bg-sky-400/10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-sky-400/20 relative group overflow-hidden w-16 h-16"
          >
            <a href="#" aria-label="X (Twitter)">
              <Twitter className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-sky-400/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            asChild
            className="hover:text-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-pink-500/20 relative group overflow-hidden w-16 h-16"
          >
            <a href="#" aria-label="Instagram">
              <Instagram className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-pink-500/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Altibbe Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
