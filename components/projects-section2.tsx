"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/project-modle"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "OECSL - Online Entrepreneurs Club",
    subtitle: "Community Platform",
    year: "2024",
    description:
      "This project showcases how modern web technologies can solve real business challenges and create tangible value for organizations. What's your experience with digital transformation in traditional industries?",
    fullDescription:
      "A comprehensive community platform designed for entrepreneurs to connect, share resources, and collaborate on projects. Built with modern web technologies including React, Node.js, and MongoDB. Features include real-time messaging, project collaboration tools, resource sharing, and event management.",
    image: "/modern-community-platform-dashboard.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/dilshan-madusanka/oecsl-platform",
    live: "https://oecsl-demo.vercel.app",
    category: "Community Platform",
    featured: true,
  },
  {
    id: 2,
    title: "SouthProperties.ae",
    subtitle: "Real Estate",
    year: "2023",
    description:
      "A modern real estate platform connecting buyers and sellers with advanced search capabilities and virtual property tours.",
    fullDescription:
      "A comprehensive real estate platform featuring advanced property search, virtual tours, mortgage calculators, and agent management. Built with Next.js and integrated with multiple MLS systems for real-time property data.",
    image: "/real-estate-website-interface.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/dilshan-madusanka/south-properties",
    live: "https://southproperties-demo.vercel.app",
    category: "Real Estate",
    featured: true,
  },
  {
    id: 3,
    title: "BrissBella",
    subtitle: "Digital Platform",
    year: "2023",
    description:
      "A digital platform for beauty and wellness services with booking management and customer engagement features.",
    fullDescription:
      "An all-in-one digital platform for beauty and wellness businesses. Features include appointment booking, customer management, service catalogs, payment processing, and analytics dashboard for business insights.",
    image: "/beauty-wellness-booking-platform.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/dilshan-madusanka/briss-bella",
    live: "https://brissbella-demo.vercel.app",
    category: "Digital Platform",
    featured: true,
  },
  {
    id: 4,
    title: "FX Ministry",
    subtitle: "FinTech",
    year: "2022",
    description:
      "A comprehensive financial technology platform for forex trading with real-time analytics and portfolio management.",
    fullDescription:
      "Advanced FinTech platform providing forex trading capabilities, real-time market data, portfolio analytics, and risk management tools. Built with modern technologies and integrated with multiple financial data providers.",
    image: "/forex-trading-dashboard-interface.jpg",
    technologies: ["Next.js", "TypeScript", "WebSocket", "Chart.js", "PostgreSQL"],
    github: "https://github.com/dilshan-madusanka/fx-ministry",
    live: "https://fxministry-demo.vercel.app",
    category: "FinTech",
    featured: true,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold  text-balance">Featured Projects</h2>
        </div>
       <div className="grid lg:grid-cols-[60%_40%] gap-16 items-start">
          {/* Right Side - Projects Grid */}
          <div className="h-[80vh] overflow-hidden">
            <div className="h-full overflow-y-auto space-y-8 pr-4 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
              {/* Featured Projects - Bento Grid */}
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                {featuredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className={`
                      group relative overflow-hidden cursor-pointer border-2 transition-all duration-300 hover:border-foreground/20
                      ${index === 0 ? "col-span-1 row-span-1" : ""}
                      ${index === 1 ? "col-span-1 row-span-1" : ""}
                      ${index === 2 ? "col-span-1 row-span-1" : ""}
                      ${index === 3 ? "col-span-1 row-span-1" : ""}
                      bg-gradient-to-br from-muted/50 to-muted/20 hover:from-muted/70 hover:to-muted/30
                    `}
                    onClick={() => setSelectedProject(project)}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <CardContent className="p-0 h-full relative">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover  group-hover:opacity-30 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative h-full p-6 flex flex-col justify-end">
                        <div className="space-y-2">
                          <Badge variant="secondary" className="text-xs w-fit">
                            {project.category} • {project.year}
                          </Badge>
                          <h3 className="font-bold text-lg leading-tight text-balance">{project.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{project.subtitle}</p>
                        </div>

                        {/* Hover Details */}
                        <div
                          className={`
                        absolute inset-0 p-6 bg-background/95 backdrop-blur-sm flex flex-col justify-center
                        transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}
                      `}
                        >
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{project.technologies.length - 3}
                                </Badge>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent">
                                <Github className="h-3 w-3 mr-1" />
                                Code
                              </Button>
                              <Button size="sm" className="h-8 px-3 text-xs">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Live
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
     
          <div className="lg:sticky lg:top-20">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-balance leading-tight">Featured Projects{" "}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Explore a curated collection of web apps, SaaS platforms, and digital solutions I've led, built, or
                contributed to. Each one reflects a focus on{" "}
                <span className="text-foreground font-medium">strategy, execution, and measurable impact.</span>
              </p>
            </div>
          </div>

          
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
