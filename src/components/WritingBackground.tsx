import { useEffect, useState } from "react";

const WritingBackground = () => {
  const [papers, setPapers] = useState([]);
  const [pens, setPens] = useState([]);
  const [keyboards, setKeyboards] = useState([]);

  useEffect(() => {
    // Generate floating paper sheets
    const paperData = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 20,
      delay: Math.random() * 4,
      duration: Math.random() * 12 + 15,
      rotation: Math.random() * 40 - 20,
    }));

    // Generate floating pens
    const penData = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 15,
      delay: Math.random() * 3,
      duration: Math.random() * 10 + 12,
      rotation: Math.random() * 360,
    }));

    // Generate keyboard elements
    const keyboardData = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 12,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 20,
      rotation: Math.random() * 30 - 15,
    }));

    setPapers(paperData);
    setPens(penData);
    setKeyboards(keyboardData);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-35 pointer-events-none">
      {/* Floating Paper Sheets */}
      {papers.map((paper) => (
        <div
          key={`paper-${paper.id}`}
          className="absolute animate-float"
          style={{
            left: `${paper.x}%`,
            top: `${paper.y}%`,
            animationDelay: `${paper.delay}s`,
            animationDuration: `${paper.duration}s`,
            transform: `rotate(${paper.rotation}deg)`,
          }}
        >
          <div
            className="relative text-muted-foreground/30"
            style={{
              fontSize: `${paper.size}px`,
            }}
          >
            📄
          </div>
        </div>
      ))}

      {/* Floating Pens */}
      {pens.map((pen) => (
        <div
          key={`pen-${pen.id}`}
          className="absolute animate-float-reverse"
          style={{
            left: `${pen.x}%`,
            top: `${pen.y}%`,
            animationDelay: `${pen.delay}s`,
            animationDuration: `${pen.duration}s`,
            transform: `rotate(${pen.rotation}deg)`,
          }}
        >
          <div
            className="relative text-primary/40"
            style={{
              fontSize: `${pen.size}px`,
            }}
          >
            ✒️
          </div>
        </div>
      ))}

      {/* Floating Keyboard Keys */}
      {keyboards.map((keyboard) => (
        <div
          key={`keyboard-${keyboard.id}`}
          className="absolute animate-float"
          style={{
            left: `${keyboard.x}%`,
            top: `${keyboard.y}%`,
            animationDelay: `${keyboard.delay}s`,
            animationDuration: `${keyboard.duration}s`,
            transform: `rotate(${keyboard.rotation}deg)`,
          }}
        >
          <div
            className="relative text-muted-foreground/40"
            style={{
              fontSize: `${keyboard.size}px`,
            }}
          >
            ⌨️
          </div>
        </div>
      ))}

      {/* Writing Lines Pattern */}
      <div className="absolute top-1/4 left-1/4 opacity-10">
        <div className="relative w-48 h-32">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-0.5 bg-muted-foreground/20"
              style={{
                top: `${i * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Typewriter Keys Pattern */}
      <div className="absolute bottom-1/3 right-1/4 opacity-10">
        <div className="relative w-32 h-24">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border border-muted-foreground/20 rounded animate-pulse"
              style={{
                left: `${(i % 4) * 25}%`,
                top: `${Math.floor(i / 4) * 33}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Ink Drops */}
      <div className="absolute top-1/3 right-1/3 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${(i % 3) * 30}px`,
              top: `${Math.floor(i / 3) * 25}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${1.5 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Notebook Spiral */}
      <div className="absolute bottom-1/4 left-1/4 opacity-15">
        <div className="relative w-16 h-48">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 border-2 border-muted-foreground/20 rounded-full"
              style={{
                left: "50%",
                top: `${i * 12.5}%`,
                transform: "translateX(-50%)",
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WritingBackground;
