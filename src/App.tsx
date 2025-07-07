import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Hedamo from "./pages/Hedamo";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePageTransition = (path: string) => {
    if (location.pathname !== path) {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(path);
      }, 200);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, location.pathname]);

  return (
    <PageTransition
      isTransitioning={isTransitioning}
      onTransitionComplete={() => setIsTransitioning(false)}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Index
              onNavigate={handlePageTransition}
              isTransitioning={isTransitioning}
            />
          }
        />
        <Route
          path="/hedamo"
          element={
            <Hedamo
              onNavigate={handlePageTransition}
              isTransitioning={isTransitioning}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              onNavigate={handlePageTransition}
              isTransitioning={isTransitioning}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <Blog
              onNavigate={handlePageTransition}
              isTransitioning={isTransitioning}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              onNavigate={handlePageTransition}
              isTransitioning={isTransitioning}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
