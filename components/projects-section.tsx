"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/dilshan-madusanka/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL"],
    github: "https://github.com/dilshan-madusanka/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.",
    image: "/weather-app-interface.png",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    github: "https://github.com/dilshan-madusanka/weather-app",
    live: "https://weather-forecast-demo.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration capabilities.",
    image: "/social-media-dashboard.png",
    technologies: ["Vue.js", "Express.js", "Redis", "Social APIs"],
    github: "https://github.com/dilshan-madusanka/social-dashboard",
    live: "https://social-dashboard-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "An educational platform with course management, student progress tracking, and interactive learning modules for online education.",
    image: "/learning-management-system.png",
    technologies: ["Next.js", "Supabase", "Stripe", "Video.js"],
    github: "https://github.com/dilshan-madusanka/lms-platform",
    live: "https://lms-demo.vercel.app",
    featured: false,
  },
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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