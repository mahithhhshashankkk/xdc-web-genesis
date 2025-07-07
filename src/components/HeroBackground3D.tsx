import { useEffect, useState } from "react";

const HealthBackground = () => {
  const [molecules, setMolecules] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate floating molecules
    const moleculeData = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 20,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));

    // Generate floating leaves
    const leafData = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 25 + 15,
      delay: Math.random() * 3,
      duration: Math.random() * 8 + 12,
      rotation: Math.random() * 360,
    }));

    setMolecules(moleculeData);
    setLeaves(leafData);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20">
      {/* Floating Molecules (Health/Medicine theme) */}
      {molecules.map((molecule) => (
        <div
          key={`molecule-${molecule.id}`}
          className="absolute animate-float"
          style={{
            left: `${molecule.x}%`,
            top: `${molecule.y}%`,
            animationDelay: `${molecule.delay}s`,
            animationDuration: `${molecule.duration}s`,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${molecule.size}px`,
              height: `${molecule.size}px`,
            }}
          >
            {/* Central atom */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(76,175,80,0.6)]"></div>

            {/* Electron orbits */}
            <div className="absolute inset-0 border border-primary/40 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border border-primary/30 rounded-full animate-spin-reverse"></div>

            {/* Electrons */}
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-primary/80 rounded-full transform -translate-x-1/2 animate-spin-slow"></div>
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-primary/80 rounded-full transform -translate-x-1/2 animate-spin-slow"></div>
          </div>
        </div>
      ))}

      {/* Floating Leaves (Nature theme) */}
      {leaves.map((leaf) => (
        <div
          key={`leaf-${leaf.id}`}
          className="absolute animate-float-reverse"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <div
            className="relative text-primary/60"
            style={{
              fontSize: `${leaf.size}px`,
            }}
          >
            🍃
          </div>
        </div>
      ))}

      {/* DNA Helix animation */}
      <div className="absolute top-1/4 right-1/4 w-32 h-64 opacity-30">
        <div className="relative h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full flex justify-between items-center"
              style={{
                top: `${i * 12.5}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-primary/20 mx-2"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Hygiene bubbles */}
      <div className="absolute bottom-1/4 left-1/4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 border-2 border-primary/40 rounded-full animate-bounce"
            style={{
              left: `${(i % 4) * 30}px`,
              top: `${Math.floor(i / 4) * 30}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="absolute inset-1 bg-primary/20 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Medical cross symbols */}
      <div className="absolute top-1/3 left-1/3 opacity-40">
        <div className="relative w-8 h-8 animate-pulse">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-primary transform -translate-x-1/2"></div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/3 opacity-40">
        <div
          className="relative w-6 h-6 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-primary transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default HealthBackground;
