import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Animated particle field component
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      // Random positions in a sphere
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Cyan-ish colors with variation
      colors[i * 3] = 0.2 + Math.random() * 0.3; // R
      colors[i * 3 + 1] = 0.8 + Math.random() * 0.2; // G  
      colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // B
    }
    
    return [positions, colors];
  }, []);

  // Animate the particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Rotating geometric shapes
function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -2]}>
      <torusKnotGeometry args={[0.5, 0.2, 128, 16]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

// Network connection lines
function NetworkLines() {
  const ref = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const points = [];
    const colors = [];
    
    // Create interconnected lines
    for (let i = 0; i < 50; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
      
      points.push(start.x, start.y, start.z);
      points.push(end.x, end.y, end.z);
      
      // Cyan color for lines
      colors.push(0, 1, 1, 0, 1, 1);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

// Main 3D background component
export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0088ff" />
        
        <ParticleField />
        <NetworkLines />
        <FloatingGeometry />
        
        {/* Additional floating spheres */}
        <Sphere position={[-3, 2, -1]} args={[0.3, 32, 32]}>
          <meshStandardMaterial
            color="#00ffff"
            wireframe
            transparent
            opacity={0.2}
          />
        </Sphere>
        
        <Sphere position={[2, -2, -3]} args={[0.2, 32, 32]}>
          <meshStandardMaterial
            color="#0088ff"
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>
      </Canvas>
    </div>
  );
}