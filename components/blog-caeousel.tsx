"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, PerspectiveCamera, Environment, useTexture } from "@react-three/drei";
import * as THREE from "three";

const blogs = [
  {
    title: "The Lazy Programmer",
    description: "Exploring efficient coding practices",
    link: "#",
    thumbnail: "/blog-thumbnails/lazy-programmer.jpg",
  },
  {
    title: "Personal Branding as an Introverted Programmer",
    description: "Tips for self-promotion",
    link: "#",
    thumbnail: "/blog-thumbnails/personal-branding.jpg",
  },
  {
    title: "Programming Languages Are Invented Almost Like Art",
    description: "The creative process behind programming languages",
    link: "#",
    thumbnail: "/blog-thumbnails/programming-languages.jpg",
  },
]

const BlogCard = ({ blog, position }) => {
  const texture = useTexture(blog.thumbnail)

  return (
    <mesh position={position}>
      <boxGeometry args={[3, 4, 0.1]} />
      <meshPhysicalMaterial
        map={texture as THREE.Texture}
        transparent
        opacity={0.9}
        metalness={0.2}
        roughness={0.1}
        envMapIntensity={1}
      />
      <Html transform occlude>
        <div className="glass p-4 rounded shadow-lg w-64 text-black">
          <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
          <p className="mb-4">{blog.description}</p>
          <a href={blog.link} className="text-blue-700 hover:underline">
            Read More
          </a>
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
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          blog={blog}
          position={[
            Math.cos((index / blogs.length) * Math.PI * 2) * 5,
            0,
            Math.sin((index / blogs.length) * Math.PI * 2) * 5,
          ]}
        />
      ))}
    </group>
  )
}

const BlogCarousel = () => {
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

export default BlogCarousel
