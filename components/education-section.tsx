import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Software Engineering",
    institution: "Open University of Sri Lanka",
    period: "2022 - Present",
    description:
      "Specializing in full-stack development, software architecture, and enterprise solutions. Maintaining a strong GPA while actively participating in coding competitions and tech communities.",

    status: "current",
  },
  {
    id: 2,
    degree: "Fullstak Development Cetificate",
    institution: "DP Education",
    period: "2021",
    description:
      "Completed a comprehensive diploma program covering front-end and back-end web development technologies.",
    status: "completed",
  },
  {
    id: 3,
    degree: "Advanced Level (A/L)",
    institution: "Walasmulla National School",
    period: "2018 - 2020",
    description:
      "Completed with distinction in Mathematics, Physics, and Information Technology. Developed strong analytical and problem-solving skills.",
    status: "completed",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            My academic journey in software engineering and technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div key={education.id} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full shadow-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="border-l-4 border-l-primary shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold text-balance">{education.degree}</h3>
                          <p className="text-primary font-medium">{education.institution}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{education.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{education.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
