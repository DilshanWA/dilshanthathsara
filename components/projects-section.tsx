"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Invoice & Quotation Generation System",
    description:
      "A full-stack web application that enables businesses to create, manage, and track invoices and quotations seamlessly. Features role-based access control with super admin and user roles, real-time data syncing with Firebase, and secure authentication.",
    image: "/project-image.jpeg",
    technologies: ["React", "Node.js", "Firebase", "Firebase Auth", "Tailwind CSS"],
    github: "https://github.com/DilshanWA/QuantifyPro.git",
    live: "-",
    featured: true,
  },
  {
    id: 2,
    title: "Image Background Remover App",
    description:
      "A simple full-stack web application to remove image backgrounds using AI. This project was developed by Dilshan using Next.js (TypeScript) for the frontend and Python (FastAPI) for the backend, with the help of the rembg library for background removal.",
    image: "/learning-management-system.png",
    technologies: ["Next.js", "TypeScript", "Axios", "Tailwind CSS", "Python", "FastAPI", "rembg"],
    github: "https://github.com/dilshan-madusanka/lms-platform",
    live: -",
    featured: false,
  },
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black-to-br">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A showcase of my latest work and technical expertise in building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group bg-transparent" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Projects"}
            <ArrowRight
              className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${showAll ? "rotate-180" : ""}`}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
