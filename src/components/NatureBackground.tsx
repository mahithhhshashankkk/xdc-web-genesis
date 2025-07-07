import { useEffect, useState } from "react";

const NatureBackground = () => {
  const [leaves, setLeaves] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [seeds, setSeeds] = useState([]);

  useEffect(() => {
    // Generate floating leaves
    const leafData = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 12,
      rotation: Math.random() * 360,
      type: Math.random() > 0.5 ? "🍃" : "🌿",
    }));

    // Generate floating flowers
    const flowerData = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 10,
      delay: Math.random() * 3,
      duration: Math.random() * 8 + 15,
      rotation: Math.random() * 360,
      type: ["🌸", "🌺", "🌼", "🌻"][Math.floor(Math.random() * 4)],
    }));

    // Generate floating seeds/pollen
    const seedData = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 4,
      duration: Math.random() * 12 + 18,
    }));

    setLeaves(leafData);
    setFlowers(flowerData);
    setSeeds(seedData);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
      {/* Floating Leaves */}
      {leaves.map((leaf) => (
        <div
          key={`leaf-${leaf.id}`}
          className="absolute animate-float"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <div
            className="relative text-primary/80"
            style={{
              fontSize: `${leaf.size}px`,
            }}
          >
            {leaf.type}
          </div>
        </div>
      ))}

      {/* Floating Flowers */}
      {flowers.map((flower) => (
        <div
          key={`flower-${flower.id}`}
          className="absolute animate-float-reverse"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            transform: `rotate(${flower.rotation}deg)`,
          }}
        >
          <div
            className="relative opacity-90"
            style={{
              fontSize: `${flower.size}px`,
            }}
          >
            {flower.type}
          </div>
        </div>
      ))}

      {/* Floating Seeds/Pollen */}
      {seeds.map((seed) => (
        <div
          key={`seed-${seed.id}`}
          className="absolute animate-float"
          style={{
            left: `${seed.x}%`,
            top: `${seed.y}%`,
            animationDelay: `${seed.delay}s`,
            animationDuration: `${seed.duration}s`,
          }}
        >
          <div
            className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"
            style={{
              width: `${seed.size}px`,
              height: `${seed.size}px`,
            }}
          />
        </div>
      ))}

      {/* Organic patterns */}
      <div className="absolute top-1/4 right-1/4 opacity-40">
        <div className="relative w-32 h-32">
          {/* Spiral organic pattern */}
          <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border border-primary/30 rounded-full animate-spin-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/3 opacity-30">
        <div className="relative w-24 h-24">
          {/* Leaf vein pattern */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/40 transform -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-primary/30 transform rotate-45"></div>
          <div className="absolute top-3/4 left-1/4 w-1/2 h-0.5 bg-primary/30 transform -rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default NatureBackground;
