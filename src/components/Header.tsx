import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  onLogoClick?: () => void;
  isTransitioning?: boolean;
}

const Header = ({ onLogoClick, isTransitioning = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  const navigationItems = [
    {
      label: "Hedamo",
      path: "/hedamo",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={onLogoClick}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div
              className={`text-3xl font-bold transition-colors duration-300 ${
                isTransitioning ? "text-white" : "text-primary"
              }`}
            >
              Altibbe
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="text"
                placeholder="Search Altibbe"
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
                  placeholder="Search Altibbe"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-muted border-border"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>

              {/* Mobile Navigation */}
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
