"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function TorusThing() {
  return (
    <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh>
        <torusKnotGeometry args={[1, 0.35, 220, 32]} />
        <meshStandardMaterial metalness={0.8} roughness={0.2} color="#7dd3fc" />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <TorusThing />
          <Environment preset="city" />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
