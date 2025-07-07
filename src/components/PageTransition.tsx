import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    setShowContent(false);

    const timer1 = setTimeout(() => {
      setShowContent(true);
    }, 300);

    const timer2 = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Green screen overlay */}
      <div
        className="fixed inset-0 z-[9999] bg-primary pointer-events-none"
        style={{
          transform: isTransitioning ? "translateY(0%)" : "translateY(-100%)",
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "transform",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0)" : "translateY(20px)",
          transition:
            "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 300ms, transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 300ms",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
