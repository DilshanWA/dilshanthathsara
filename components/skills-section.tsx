import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating beautiful and responsive user interfaces",
    skills: [
      { name: "React", level: "Advanced", icon: "⚛️" },
      { name: "Next.js", level: "Advanced", icon: "▲" },
      { name: "TypeScript", level: "Intermediate", icon: "📘" },
      { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
      { name: "HTML/CSS", level: "Advanced", icon: "🌐" },
      { name: "JavaScript", level: "Advanced", icon: "💛" },
    ],
  },
  {
    title: "Backend Development",
    description: "Building robust and scalable server-side applications",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "🟢" },
      { name: "Express.js", level: "Intermediate", icon: "🚀" },
      { name: "Python", level: "Intermediate", icon: "🐍" },
      { name: "Java", level: "Intermediate", icon: "☕" },
      { name: "MongoDB", level: "Intermediate", icon: "🍃" },
      { name: "PostgreSQL", level: "Beginner", icon: "🐘" },
    ],
  },
  {
    title: "AI & Automation",
    description: "Currently learning and exploring emerging technologies",
    skills: [
      { name: "Machine Learning", level: "Learning", icon: "🤖" },
      { name: "Python AI Libraries", level: "Learning", icon: "📊" },
      { name: "Data Analysis", level: "Learning", icon: "📈" },
      { name: "Automation Scripts", level: "Learning", icon: "⚙️" },
      { name: "TensorFlow", level: "Learning", icon: "🧠" },
      { name: "OpenAI APIs", level: "Learning", icon: "✨" },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-green-500/10 text-green-500 border-green-500/20"
    case "Intermediate":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "Beginner":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    case "Learning":
      return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between p-3 rounded-lg bg-card border">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge variant="outline" className={getLevelColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
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
