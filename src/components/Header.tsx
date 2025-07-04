import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigationItems = [
    {
      label: "Network",
      hasDropdown: true,
      items: ["Explorer", "Validators", "Network Stats"],
    },
    {
      label: "Solutions",
      hasDropdown: true,
      items: ["Enterprise", "Trade Finance", "DeFi"],
    },
    {
      label: "Build on XDC",
      hasDropdown: true,
      items: ["Developer Tools", "Documentation", "GitHub"],
    },
    {
      label: "Resources",
      hasDropdown: true,
      items: ["Whitepaper", "Research", "Blog"],
    },
    {
      label: "Community",
      hasDropdown: true,
      items: ["Discord", "Telegram", "Twitter"],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">XDC</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-all duration-300 font-medium">
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </button>

                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-glow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-3">
                      {item.items?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 relative overflow-hidden group/item"
                        >
                          <span className="relative z-10">{subItem}</span>
                          <div className="absolute inset-0 bg-primary/5 transform -translate-x-full group-hover/item:translate-x-0 transition-transform duration-300"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="text"
                placeholder="Search XDC"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-64 bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
              <Search className="absolute right-3 w-4 h-4 text-muted-foreground" />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {/* Mobile Search */}
              <div className="relative md:hidden">
                <Input
                  type="text"
                  placeholder="Search XDC"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-muted border-border"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>

              {/* Mobile Navigation */}
              {navigationItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <button className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors">
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {item.hasDropdown && (
                    <div className="pl-4 space-y-2">
                      {item.items?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
