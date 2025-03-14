import PortfolioCarousel from "@/components/portfolio-carousel"
import React from "react"

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">My Portfolio</h1>
      <PortfolioCarousel />
    </div>
  )
}
