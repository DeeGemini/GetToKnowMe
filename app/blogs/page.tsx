import BlogCarousel from "@/components/blog-carousel"
import React from "react"

export default function Blogs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">My Blog Posts</h1>
      <BlogCarousel />
    </div>
  )
}
