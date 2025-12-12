import { Card } from "@/components/ui/card"

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Tech Startup Inc.",
    period: "Summer 2024",
    description:
      "Developed and maintained React components for the company's main web application. Collaborated with senior engineers on implementing new features and optimizing existing codebase for better performance.",
    achievements: [
      "Improved page load time by 40% through code optimization",
      "Built 15+ reusable React components",
      "Participated in agile development and code reviews",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University Computer Science Department",
    period: "2023 - Present",
    description:
      "Assisted professors in teaching introductory programming courses. Conducted lab sessions, graded assignments, and provided one-on-one tutoring to students.",
    achievements: [
      "Mentored 50+ students in programming fundamentals",
      "Created supplementary learning materials",
      "Held weekly office hours for student support",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 - 2023",
    description:
      "Designed and developed custom websites for small businesses and individual clients. Managed entire project lifecycle from requirements gathering to deployment.",
    achievements: [
      "Delivered 10+ successful projects",
      "Maintained 100% client satisfaction rate",
      "Built responsive, SEO-optimized websites",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} • {exp.period}
                    </p>
                  </div>

                  <p className="text-pretty leading-relaxed text-muted-foreground">{exp.description}</p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
