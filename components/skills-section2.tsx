'use Client'

import { Card } from "@/components/ui/card"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiGit,
  SiDocker,
  SiRedux,
  SiExpress,
  SiLinux,
  SiFirebase,
  SiTensorflow,
  SiOpenai
} from 'react-icons/si';

import { Layers, Code, Palette, Globe, Monitor, Server, Cpu, Database, Cloud, Rocket, Brain, Zap, Settings, GitBranch, Smartphone, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    <section id="skills" className="py-20 relative bg-black-to-br">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold  text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technologies I work with to build innovative solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="p-6 py-0 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Technology Icons */}
                <div className="flex items-center gap-3 ml-8">
                  {category.technologies.map((tech, techIndex) => {
                    const Icon = tech.icon
                    return (
                      <div key={techIndex} className="relative group/icon" title={tech.name}>
                        <div className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                          <Icon className="w-5 h-5 text-primary group-hover/icon:text-primary/80" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-border/50">
                          {tech.name}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git & GitHub",
              "VS Code",
              "Figma",
              "AWS",
              "OOP",
              "DSA",
              "Vercel",
              "Firebase",
              "REST APIs",
              "Linux",
            ].map((tool, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}