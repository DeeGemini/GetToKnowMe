"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import Typed from "typed.js"

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer",
        "Backend Developer",
        "UX Designer",
        "Mobile Developer",
        "Web Developer",
        "Blogger",
        "🤖 AI & DevSecOps Specialist",
      ],
      typeSpeed: 70,
      backSpeed: 55,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="glass py-20 text-center rounded-lg shadow-lg mx-4 my-8">
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt="Nontuthuzelo Ngwenya"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-8"
      />
      <h1 className="text-4xl font-bold mb-2">Nontuthuzelo Ngwenya</h1>
      <h2 className="text-2xl mb-4">Software Engineer Graduate</h2>
      <div className="text-xl">
        I'm a <span ref={el}></span>
      </div>
    </section>
  )
}

export default Hero
