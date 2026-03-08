"use client"

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  MeshDistortMaterial, 
  MeshTransmissionMaterial, 
  ContactShadows, 
  Environment, 
  Lightformer,
  PerspectiveCamera
} from '@react-three/drei'
import * as THREE from 'three'

// Optimized 3D Developer Character with better proportions and materials
function DeveloperCharacter() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle breathing animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.08
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
    }
  })

  // Optimized material settings
  const skinMaterial = useMemo(() => (
    <meshStandardMaterial 
      color="#ffdbac" 
      roughness={0.7} 
      metalness={0.1}
    />
  ), [])

  const jacketMaterial = useMemo(() => (
    <meshStandardMaterial 
      color="#FF6B00" 
      roughness={0.5} 
      metalness={0.2}
      emissive="#FF6B00"
      emissiveIntensity={0.1}
    />
  ), [])

  const pantsMaterial = useMemo(() => (
    <meshStandardMaterial 
      color="#1e293b" 
      roughness={0.6} 
      metalness={0.1}
    />
  ), [])

  const coffeeMaterial = useMemo(() => (
    <meshStandardMaterial 
      color="#8B4513" 
      roughness={0.3} 
      metalness={0.4}
    />
  ), [])

  return (
    <group ref={groupRef} position={[0, -1.2, 0]} scale={1.3}>
      {/* Head with better proportions */}
      <mesh position={[0, 2.6, 0]} castShadow>
        <sphereGeometry args={[0.45, 24, 24]} />
        {skinMaterial}
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 2.65, 0.4]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 2.65, 0.4]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, 2.45, 0.42]} rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[0.15, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 2.2, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.18, 0.3, 16]} />
        {skinMaterial}
      </mesh>
      
      {/* Torso - more realistic shape */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <capsuleGeometry args={[0.5, 0.8, 16, 24]} />
        {jacketMaterial}
      </mesh>
      
      {/* Jacket collar detail */}
      <mesh position={[0, 1.95, 0.15]} castShadow>
        <boxGeometry args={[0.7, 0.15, 0.3]} />
        <meshStandardMaterial color="#E65A00" roughness={0.5} />
      </mesh>
      
      {/* Arms with better articulation */}
      <group position={[0, 1.7, 0]}>
        {/* Left arm */}
        <group position={[-0.65, 0, 0]} rotation={[0.3, 0, 0.4]}>
          <mesh position={[0, -0.35, 0]} castShadow>
            <capsuleGeometry args={[0.12, 0.6, 12, 16]} />
            {jacketMaterial}
          </mesh>
          {/* Left hand */}
          <mesh position={[0, -0.75, 0]} castShadow>
            <sphereGeometry args={[0.15, 16, 16]} />
            {skinMaterial}
          </mesh>
        </group>
        
        {/* Right arm - holding coffee */}
        <group position={[0.65, 0, 0.2]} rotation={[-0.5, 0, -0.4]}>
          <mesh position={[0, -0.35, 0]} castShadow>
            <capsuleGeometry args={[0.12, 0.6, 12, 16]} />
            {jacketMaterial}
          </mesh>
          {/* Right hand */}
          <mesh position={[0, -0.75, 0]} castShadow>
            <sphereGeometry args={[0.15, 16, 16]} />
            {skinMaterial}
          </mesh>
          
          {/* Coffee cup */}
          <group position={[0, -0.85, 0]}>
            {/* Cup body */}
            <mesh castShadow>
              <cylinderGeometry args={[0.12, 0.1, 0.25, 16]} />
              {coffeeMaterial}
            </mesh>
            {/* Coffee liquid */}
            <mesh position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.11, 0.11, 0.02, 16]} />
              <meshStandardMaterial color="#3E2723" roughness={0.2} />
            </mesh>
            {/* Steam effect using small particles */}
            <SteamParticles />
          </group>
        </group>
      </group>
      
      {/* Legs with better proportions */}
      <group position={[0, 0.6, 0]}>
        <mesh position={[-0.2, -0.3, 0]} castShadow>
          <capsuleGeometry args={[0.16, 0.7, 12, 16]} />
          {pantsMaterial}
        </mesh>
        <mesh position={[0.2, -0.3, 0]} castShadow>
          <capsuleGeometry args={[0.16, 0.7, 12, 16]} />
          {pantsMaterial}
        </mesh>
        
        {/* Shoes */}
        <mesh position={[-0.2, -0.75, 0.1]} castShadow>
          <boxGeometry args={[0.2, 0.15, 0.35]} />
          <meshStandardMaterial color="#000000" roughness={0.4} />
        </mesh>
        <mesh position={[0.2, -0.75, 0.1]} castShadow>
          <boxGeometry args={[0.2, 0.15, 0.35]} />
          <meshStandardMaterial color="#000000" roughness={0.4} />
        </mesh>
      </group>
    </group>
  )
}

// Steam particles for coffee cup
function SteamParticles() {
  const particlesRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        const offset = i * 0.3
        particle.position.y = 0.15 + Math.sin(state.clock.elapsedTime * 2 + offset) * 0.1
        particle.scale.setScalar(0.8 - (Math.sin(state.clock.elapsedTime * 2 + offset) * 0.3))
      })
    }
  })

  return (
    <group ref={particlesRef} position={[0, 0.15, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.random() * 0.04 - 0.02, i * 0.08, 0]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.3} 
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// Professional HTML5 Icon
function HTML5Icon() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[-3.5, 3, -1.5]} scale={0.55} castShadow>
        {/* Shield shape using polygon */}
        <group>
          <mesh>
            <boxGeometry args={[1, 1.2, 0.15]} />
            <meshStandardMaterial 
              color="#E44D26" 
              roughness={0.3} 
              metalness={0.6}
              emissive="#E44D26"
              emissiveIntensity={0.2}
            />
          </mesh>
          {/* "5" text representation */}
          <mesh position={[0, 0, 0.1]}>
            <boxGeometry args={[0.5, 0.1, 0.05]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>
      </mesh>
    </Float>
  )
}

// Professional CSS3 Icon
function CSS3Icon() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
    }
  })
  
  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={1.4}>
      <mesh ref={meshRef} position={[3.2, 2.5, -1]} scale={0.5} castShadow>
        <boxGeometry args={[1, 1.2, 0.15]} />
        <meshStandardMaterial 
          color="#1572B6" 
          roughness={0.3} 
          metalness={0.6}
          emissive="#1572B6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

// Professional JavaScript Icon
function JSIcon() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      meshRef.current.scale.setScalar(scale)
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.8}>
      <mesh ref={meshRef} position={[-2.8, 0.8, 1.2]} scale={0.4} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#F7DF1E" 
          roughness={0.2} 
          metalness={0.7}
          emissive="#F7DF1E"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

// Professional Node.js Icon
function NodeIcon() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.35
    }
  })
  
  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={1.3}>
      <mesh ref={meshRef} position={[3, -1.2, 0.5]} scale={0.5} castShadow>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#339933" 
          roughness={0.25} 
          metalness={0.65}
          emissive="#339933"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

// Professional React Icon (atom-like structure)
function ReactIcon() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })
  
  return (
    <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.6}>
      <group ref={groupRef} position={[-3, -1.5, -0.5]} scale={0.4}>
        {/* Core */}
        <mesh castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial 
            color="#61DAFB" 
            roughness={0.1} 
            metalness={0.9}
            emissive="#61DAFB"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Orbits */}
        {[0, 60, 120].map((angle, i) => (
          <mesh key={i} rotation={[0, 0, (angle * Math.PI) / 180]}>
            <torusGeometry args={[1, 0.03, 12, 32]} />
            <meshStandardMaterial 
              color="#61DAFB" 
              roughness={0.2} 
              metalness={0.8}
              emissive="#61DAFB"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Figma-style design element
function FigmaIcon() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })
  
  return (
    <Float speed={1.7} rotationIntensity={0.3} floatIntensity={1.5}>
      <group ref={groupRef} position={[2.5, -2.5, -1]} scale={0.35}>
        {/* Figma-style layered circles */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial 
            color="#A259FF" 
            roughness={0.3} 
            metalness={0.5}
            emissive="#A259FF"
            emissiveIntensity={0.15}
          />
        </mesh>
        <mesh position={[0, -0.5, 0]} castShadow>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial 
            color="#1ABCFE" 
            roughness={0.3} 
            metalness={0.5}
            emissive="#1ABCFE"
            emissiveIntensity={0.15}
          />
        </mesh>
        <mesh position={[0.4, 0, 0.1]} castShadow>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial 
            color="#FF7262" 
            roughness={0.3} 
            metalness={0.5}
            emissive="#FF7262"
            emissiveIntensity={0.15}
          />
        </mesh>
      </group>
    </Float>
  )
}

// Premium glass crystal - centerpiece
function PremiumCrystal() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[-3.5, -2, -3]} scale={1.2} castShadow>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={1.5}
          chromaticAberration={0.04}
          anisotropy={0.2}
          distortion={0.08}
          distortionScale={0.2}
          temporalDistortion={0.08}
          color="#ffffff"
          attenuationDistance={1.5}
          attenuationColor="#FF6B00"
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  )
}

// Subtle ambient particles
function AmbientParticles() {
  const particlesRef = useRef<THREE.Group>(null)
  
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6 - 2
      ] as [number, number, number],
      speed: 0.5 + Math.random() * 0.5,
      scale: 0.02 + Math.random() * 0.03
    }))
  }, [])
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y += Math.sin(state.clock.elapsedTime * particles[i].speed) * 0.001
        const opacity = 0.3 + Math.sin(state.clock.elapsedTime * particles[i].speed * 2) * 0.2
        ;(particle as THREE.Mesh<THREE.BufferGeometry, THREE.Material>).material.opacity = opacity
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial 
            color="#FF6B00" 
            transparent 
            opacity={0.3}
            emissive="#FF6B00"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

// Optimized background gradients
function BackgroundGradients() {
  return (
    <>
      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.4}>
        <mesh position={[5, -3, -6]} scale={3}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial 
            color="#FF6B00" 
            speed={1.5} 
            distort={0.3} 
            roughness={0.7} 
            transparent 
            opacity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={0.05} floatIntensity={0.5}>
        <mesh position={[-4.5, 2.5, -7]} scale={2.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial 
            color="#3b82f6" 
            speed={1.2} 
            distort={0.25} 
            roughness={0.7} 
            transparent 
            opacity={0.15}
          />
        </mesh>
      </Float>
    </>
  )
}

// Loading fallback
function LoadingScene() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#FF6B00" wireframe />
    </mesh>
  )
}

export function Scene3D() {
  return (
    <div className="three-canvas-container h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        performance={{ min: 0.5 }}
      >
        {/* Optimized camera setup */}
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
        
        <Suspense fallback={<LoadingScene />}>
          {/* Professional lighting setup */}
          <ambientLight intensity={0.4} color="#ffffff" />
          
          {/* Key light */}
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.2} 
            penumbra={1} 
            intensity={1.5} 
            color="#ffffff"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          
          {/* Fill light */}
          <spotLight 
            position={[-8, 5, 8]} 
            angle={0.3} 
            penumbra={1} 
            intensity={0.8} 
            color="#ffffff"
            castShadow
          />
          
          {/* Accent light (orange) */}
          <spotLight 
            position={[0, -5, 5]} 
            angle={0.25} 
            penumbra={1} 
            intensity={1.2} 
            color="#FF6B00"
          />
          
          {/* Rim light */}
          <pointLight 
            position={[-5, 0, -5]} 
            intensity={1} 
            color="#3b82f6"
          />
          
          {/* Premium environment map */}
          <Environment resolution={256} preset="studio">
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <Lightformer 
                form="circle" 
                intensity={4} 
                rotation-x={Math.PI / 2} 
                position={[0, 5, -9]} 
                scale={2} 
                color="#ffffff" 
              />
              <Lightformer 
                form="ring" 
                intensity={1} 
                rotation-y={Math.PI / 2} 
                position={[-5, 1, -1]} 
                scale={2} 
                color="#FF6B00" 
              />
              <Lightformer 
                form="ring" 
                intensity={0.5} 
                rotation-y={-Math.PI / 2} 
                position={[10, 1, 0]} 
                scale={8} 
                color="#3b82f6" 
              />
            </group>
          </Environment>

          {/* Main character */}
          <DeveloperCharacter />
          
          {/* Tech stack icons */}
          <HTML5Icon />
          <CSS3Icon />
          <JSIcon />
          <NodeIcon />
          <ReactIcon />
          <FigmaIcon />
          
          {/* Decorative elements */}
          <PremiumCrystal />
          <AmbientParticles />
          <BackgroundGradients />

          {/* Professional contact shadows */}
          <ContactShadows 
            position={[0, -3.5, 0]} 
            opacity={0.35} 
            scale={15} 
            blur={2.5} 
            far={5}
            resolution={512}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}