import { Button } from "@/components/ui/button"
import React from "react"

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="glass p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-12 text-center">My Resume</h1>
        <div className="text-center">
          <Button asChild>
            <a href="/path-to-your-resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
