import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning: boolean;
  onTransitionComplete?: () => void;
}

const PageTransition = ({
  children,
  isTransitioning,
  onTransitionComplete,
}: PageTransitionProps) => {
  const [showContent, setShowContent] = useState(!isTransitioning);

  useEffect(() => {
    if (isTransitioning) {
      setShowContent(false);
      const timer = setTimeout(() => {
        setShowContent(true);
        onTransitionComplete?.();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, onTransitionComplete]);

  return (
    <div className="relative min-h-screen">
      {/* Green screen overlay */}
      <div
        className="fixed inset-0 z-[9999] bg-primary pointer-events-none"
        style={{
          transform: isTransitioning ? "translateY(0%)" : "translateY(-100%)",
          transition: "transform 400ms cubic-bezier(0.4, 0, 0.2, 1)",
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
            "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 200ms, transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 200ms",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
