"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef } from "react"
import { Html, PerspectiveCamera, Environment } from "@react-three/drei"
import * as THREE from "three"

const projects = [
  { title: "Project 1", description: "A web application", techStack: "React, Node.js", demo: "#", github: "#" },
  { title: "Project 2", description: "Mobile app", techStack: "React Native, Firebase", demo: "#", github: "#" },
  { title: "Project 3", description: "E-commerce platform", techStack: "Next.js, MongoDB", demo: "#", github: "#" },
]

const ProjectCard = ({ project, position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[3, 4, 0.1]} />
      <meshPhysicalMaterial
        color="#ffffff"
        transparent
        opacity={0.7}
        metalness={0.2}
        roughness={0.1}
        envMapIntensity={1}
      />
      <Html transform occlude>
        <div className="glass p-4 rounded shadow-lg w-64 text-black">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-2">{project.description}</p>
          <p className="mb-2">Tech Stack: {project.techStack}</p>
          <div className="flex justify-between">
            <a href={project.demo} className="text-blue-700 hover:underline">
              Demo
            </a>
            <a href={project.github} className="text-blue-700 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </Html>
    </mesh>
  )
}

const RotatingCarousel = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          position={[
            Math.cos((index / projects.length) * Math.PI * 2) * 5,
            0,
            Math.sin((index / projects.length) * Math.PI * 2) * 5,
          ]}
        />
      ))}
    </group>
  )
}

const PortfolioCarousel = () => {
  return (
    <div className="h-[600px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCarousel />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}

export default PortfolioCarousel;
