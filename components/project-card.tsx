import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    techStack: string[]
    demoLink: string
    githubLink: string
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass rounded-lg shadow-lg overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={400}
        height={200}
        className="w-full object-cover h-48"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="font-bold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <Button asChild variant="outline">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
          <Button asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
