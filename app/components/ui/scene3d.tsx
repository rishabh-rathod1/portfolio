"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, ContactShadows, Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

// The playful lightning/energy asset from the video (reimagined as a dynamic glass shard)
function FloatingShard() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[1, 0, 0]} scale={2.5}>
        <icosahedronGeometry args={[1, 0]} />
        {/* High-fidelity glass material reflecting the orange accent */}
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={2.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
          attenuationDistance={1}
          attenuationColor="#ffffff"
        />
      </mesh>
    </Float>
  )
}

// Representing "JavaScript" (Yellow orb) from video
function JSOrb() {
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[-2, 2.5, -2]} scale={0.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  )
}

// Representing "CSS/React" (Blue ring) from video
function BlueRing() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={[3, 3, -1]} scale={0.5}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  )
}

// Representing "HTML/Core" (Orange cube) from video
function OrangeCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })
  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-2.5, -2, -1]} scale={0.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.2} metalness={0.5} />
      </mesh>
    </Float>
  )
}

function FloatingBackgroundBlobs() {
  return (
    <group position={[0, 0, -5]}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
        <mesh position={[4, -4, 0]} scale={2}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial color="#FF6B00" speed={2} distort={0.4} roughness={0.6} transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  )
}

export function Scene3D() {
  return (
    <div className="three-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Deep, dramatic lighting setup (Rim lighting style) */}
        <ambientLight intensity={0.2} color="#ffffff" />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1.5} color="#FF6B00" />
        <pointLight position={[0, -2, -4]} intensity={2} color="#FF6B00" />
        
        {/* Custom Environment map for glassy reflections */}
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Lightformer form="circle" intensity={10} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} color="#ffffff" />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} color="#FF6B00" />
            <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} color="#FF6B00" />
          </group>
        </Environment>

        {/* 3D Objects */}
        <FloatingShard />
        <JSOrb />
        <BlueRing />
        <OrangeCube />
        <FloatingBackgroundBlobs />

        {/* Ground shadow for depth */}
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  )
}
