import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [contentKey, setContentKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Start transition immediately
    setIsTransitioning(true);
    setShowContent(false);

    // Green screen slides down and covers the screen
    const timer1 = setTimeout(() => {
      // Update content while screen is covered
      setContentKey((prev) => prev + 1);
    }, 200);

    // Green screen starts sliding up and content begins to appear
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 250);

    // Green screen completely slides up
    const timer3 = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Green screen overlay */}
      <div
        className="fixed inset-0 z-[9999] bg-primary pointer-events-none"
        style={{
          transform: isTransitioning ? "translateY(0%)" : "translateY(-100%)",
          transition: isTransitioning
            ? "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)"
            : "transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 250ms",
          willChange: "transform",
        }}
      />

      {/* Content with homepage-style slide animations */}
      <div
        key={contentKey}
        className="relative z-10"
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0px)" : "translateY(40px)",
          transition:
            "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 100ms, transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 100ms",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
