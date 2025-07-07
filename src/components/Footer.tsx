import { Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube", hoverColor: "red" },
    { icon: XIcon, href: "#", label: "X", hoverColor: "black" },
    { icon: Facebook, href: "#", label: "Facebook", hoverColor: "blue" },
    { icon: Instagram, href: "#", label: "Instagram", hoverColor: "pink" },
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
          {socialLinks.map((social, index) => {
            const getHoverClasses = (color: string) => {
              switch (color) {
                case "red":
                  return "hover:text-red-500 hover:bg-red-500/10 hover:shadow-red-500/20";
                case "black":
                  return "hover:text-black hover:bg-black/10 hover:shadow-black/20";
                case "blue":
                  return "hover:text-blue-600 hover:bg-blue-600/10 hover:shadow-blue-600/20";
                case "pink":
                  return "hover:text-pink-500 hover:bg-pink-500/10 hover:shadow-pink-500/20";
                default:
                  return "hover:text-primary hover:bg-primary/10 hover:shadow-primary/20";
              }
            };

            const getBgColor = (color: string) => {
              switch (color) {
                case "red":
                  return "bg-red-500/20";
                case "black":
                  return "bg-black/20";
                case "blue":
                  return "bg-blue-600/20";
                case "pink":
                  return "bg-pink-500/20";
                default:
                  return "bg-primary/20";
              }
            };

            return (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                asChild
                className={`${getHoverClasses(social.hoverColor)} transition-all duration-300 hover:scale-125 hover:shadow-lg relative group overflow-hidden w-16 h-16`}
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className={`absolute inset-0 ${getBgColor(social.hoverColor)} rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300`}
                  ></div>
                </a>
              </Button>
            );
          })}
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
