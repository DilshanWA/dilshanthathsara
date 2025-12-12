import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Your University Name",
    period: "2021 - Present",
    description: "Focusing on software development, algorithms, data structures, and modern web technologies.",
    gpa: "3.8/4.0",
  },
]

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    date: "2023",
  },
  {
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2023",
  },
]

export function Education() {
  return (
    <section id="education" className="border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Education</h2>
            </div>

            {education.map((edu, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <Badge variant="secondary" className="w-fit gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-lg font-medium text-primary">{edu.institution}</p>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{edu.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">GPA:</span>
                    <span className="text-muted-foreground">{edu.gpa}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Certifications</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-3">
                    <Award className="h-6 w-6 text-primary" />
                    <div className="space-y-2">
                      <h3 className="font-semibold leading-tight text-foreground">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="w-fit text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
