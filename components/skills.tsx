import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Redux"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Agile"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Skills & Technologies</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <Card key={category.category} className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
