import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import React from "react"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
