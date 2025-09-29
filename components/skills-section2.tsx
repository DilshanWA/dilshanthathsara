"use Client"

import { Card } from "@/components/ui/card"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiFigma,
  SiPython,
  SiMongodb,
} from "react-icons/si"

import { Database, Cloud, Rocket, Brain, Zap, Settings, GitBranch, Smartphone, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend & Design",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Backend & Cloud",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: Database },
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Rocket },
    ],
  },
  {
    title: "AI & Automation",
    technologies: [
      { name: "Machine Learning", icon: Brain },
      { name: "APIs", icon: Zap },
      { name: "DevOps", icon: Settings },
      { name: "Git", icon: GitBranch },
      { name: "Mobile Dev", icon: Smartphone },
      { name: "Security", icon: Shield },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative bg-black-to-br bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Skills & Technologies</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
            Technologies I work with to build innovative solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-end">
                    {category.technologies.map((tech, techIndex) => {
                      const Icon = tech.icon
                      return (
                        <div key={techIndex} className="relative group/icon" title={tech.name}>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 touch:hover:scale-100">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover/icon:text-primary/80" />
                          </div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-border/50 z-10">
                            {tech.name}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {["Git & GitHub", "VS Code", "Figma", "AWS", "OOP", "DSA", "Vercel", "Firebase", "REST APIs"].map(
              (tool, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  {tool}
                </Badge>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
