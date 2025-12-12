import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies focusing on performance and user experience.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "/modern-ecommerce-dashboard.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for agile teams and project management.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/task-management-kanban.png",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Featured Projects</h2>
            <p className="text-pretty text-muted-foreground">
              A selection of projects that showcase my skills in full-stack development, problem-solving, and creative
              implementation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col p-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
