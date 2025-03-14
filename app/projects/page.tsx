import ProjectCard from "@/components/project-card"
import React from "react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.",
    image: "/projects/ecommerce.jpg",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A React Native mobile app for managing tasks and to-do lists.",
    image: "/projects/task-app.jpg",
    techStack: ["React Native", "Firebase", "Redux"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot built with Python and integrated with a web interface.",
    image: "/projects/chatbot.jpg",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    demoLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
