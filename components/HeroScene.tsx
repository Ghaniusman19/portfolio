"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function CoreScene() {
  const groupRef = useRef<Group>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        key: index,
        x: (index % 3) * 1.8 - 2.7,
        y: Math.sin(index) * 1.6,
        z: (index % 2 === 0 ? 1 : -1) * 1.9,
        scale: 0.08 + (index % 5) * 0.02,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.35;
    groupRef.current.rotation.y = t * 0.6;
    groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.35;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.25, 1]} />
          <meshStandardMaterial
            color="#e5e7eb"
            emissive="#64748b"
            emissiveIntensity={0.8}
            metalness={0.92}
            roughness={0.15}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.8} floatIntensity={1.5}>
        <mesh position={[0, 0, 0]} rotation={[1.3, 0.2, 0.8]}>
          <torusKnotGeometry args={[1.75, 0.18, 180, 24]} />
          <meshPhysicalMaterial
            color="#dbe3eb"
            emissive="#475569"
            emissiveIntensity={0.7}
            metalness={1}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.07}
          />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={1.5} floatIntensity={1.8}>
        <RoundedBox
          args={[2.6, 1.4, 0.75]}
          radius={0.2}
          position={[2.1, 1.1, -0.7]}
        >
          <meshStandardMaterial
            color="#f8fafc"
            emissive="#94a3b8"
            emissiveIntensity={0.25}
            metalness={0.55}
            roughness={0.2}
          />
        </RoundedBox>
      </Float>

      <Float speed={1.8} rotationIntensity={1.4} floatIntensity={1.7}>
        <RoundedBox
          args={[1.9, 1.2, 0.7]}
          radius={0.2}
          position={[-2.4, -1.2, 0.5]}
        >
          <meshStandardMaterial
            color="#0f172a"
            emissive="#cbd5e1"
            emissiveIntensity={0.28}
            metalness={0.75}
            roughness={0.15}
          />
        </RoundedBox>
      </Float>

      {particles.map((particle) => (
        <mesh
          key={particle.key}
          position={[particle.x, particle.y, particle.z]}
          scale={particle.scale}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={particle.key % 2 === 0 ? "#e2e8f0" : "#94a3b8"}
            emissive={particle.key % 2 === 0 ? "#cbd5e1" : "#64748b"}
            emissiveIntensity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[30px] border border-slate-300/15 bg-slate-950/80 shadow-[0_35px_80px_rgba(15,23,42,0.4)] backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(226,232,240,0.12),_transparent_30%)]" />
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 2]}>
        <color attach="background" args={["#0b0d10"]} />
        <ambientLight intensity={1.3} />
        <directionalLight
          position={[4, 5, 5]}
          intensity={2.2}
          color="#f8fafc"
        />
        <pointLight position={[-4, -2, 3]} intensity={18} color="#cbd5e1" />
        <pointLight position={[3, 2, 4]} intensity={18} color="#e2e8f0" />
        <CoreScene />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
}
