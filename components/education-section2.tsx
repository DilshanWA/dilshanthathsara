"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { GraduationCap, Calendar, Award, Users, Trophy } from "lucide-react"

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
    degree: "Fullstack Development Certificate",
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

const stats = [
  {
    number: "4+",
    label: "YEARS OF CONTINUOUS LEARNING",
    icon: Calendar,
  },
  {
    number: "15+",
    label: "TECHNICAL CERTIFICATIONS EARNED",
    icon: Award,
  },
  {
    number: "3",
    label: "MAJOR QUALIFICATIONS COMPLETED",
    icon: Trophy,
  },
  {
    number: "100+",
    label: "PROJECTS & ASSIGNMENTS DELIVERED",
    icon: Users,
  },
]

const qualifications = [
  {
    title: "Bachelor of Software Engineering",
    subtitle: "Open University of Sri Lanka",
    description: "2022 to Present",
    status: "current",
  },
  {
    title: "Fullstack Development Certificate",
    subtitle: "DP Education",
    description: "Completed - 2021",
    status: "completed",
  },
  {
    title: "Advanced Level (A/L)",
    subtitle: "Walasmulla National School",
    description: "Completed - 2018-2020",
    status: "completed",
  },
]

const achievements = [
  {
    title: "Academic Excellence",
    subtitle: "Mathematics, Physics & IT",
    description: "Distinction Level Performance",
  },
  {
    title: "Professional Development",
    subtitle: "Full-Stack Development",
    description: "Industry-Ready Skills",
  },
  {
    title: "Continuous Learning",
    subtitle: "Software Engineering",
    description: "Advanced Technical Knowledge",
  },
  {
    title: "Technical Expertise",
    subtitle: "Enterprise Solutions",
    description: "Real-World Applications",
  },
]

const certifications = [
  {
    title: "Full-Stack Web Development",
    subtitle: "DP Education",
    description: "Frontend & Backend Technologies",
  },
  {
    title: "Software Engineering Principles",
    subtitle: "Open University",
    description: "Architecture & Design Patterns",
  },
  {
    title: "Database Management",
    subtitle: "Academic Coursework",
    description: "SQL & NoSQL Systems",
  },
  {
    title: "Project Management",
    subtitle: "Academic Projects",
    description: "Agile & Scrum Methodologies",
  },
]

const experience = [
  {
    title: "Academic Projects",
    subtitle: "University Coursework",
    description: "Multiple Software Development Projects",
  },
  {
    title: "Coding Competitions",
    subtitle: "Tech Communities",
    description: "Problem Solving & Algorithm Design",
  },
  {
    title: "Self-Directed Learning",
    subtitle: "Continuous Education",
    description: "Modern Web Technologies",
  },
  {
    title: "Collaborative Work",
    subtitle: "Team Projects",
    description: "Group Development & Version Control",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="min-h-auto bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            My academic journey in software <br /> engineering and technology
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Built with <span className="text-foreground">Purpose.</span>
                <br />
                Driven by <span className="text-foreground">Progress.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
                Over the past years, I've pursued comprehensive education in software engineering, completed multiple
                certifications, and maintained academic excellence across diverse technical disciplines. Whether
                mastering full-stack development, excelling in mathematics and physics, or advancing through university
                studies, my focus is simple — learn what matters.
              </p>
            </div>

          
          </div>

          {/* Right Column - Education Details with Tabs */}
          <div className="space-y-6">
            <Tabs defaultValue="qualifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-muted">
                <TabsTrigger
                  value="qualifications"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground"
                >
                  Achievements
                </TabsTrigger>
                <TabsTrigger
                  value="certifications"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground"
                >
                  Certifications
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground"
                >
                  Experience
                </TabsTrigger>
              </TabsList>

              <TabsContent value="qualifications" className="space-y-4 mt-6">
                {qualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {qualification.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">- {qualification.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-card-foreground font-medium text-sm">{qualification.description}</span>
                        <Badge
                          variant={qualification.status === "current" ? "default" : "secondary"}
                          className={
                            qualification.status === "current"
                              ? "bg-primary hover:bg-white text-primary-foreground ml-2"
                              : "ml-2"
                          }
                        >
                          {qualification.status === "current" ? "Current" : "Completed"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4 mt-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">- {achievement.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-card-foreground font-medium text-sm">{achievement.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="certifications" className="space-y-4 mt-6">
                {certifications.map((certification, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {certification.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">- {certification.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-card-foreground font-medium text-sm">{certification.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="experience" className="space-y-4 mt-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-card-foreground font-medium">{exp.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-card-foreground font-medium text-sm">{exp.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="academic-journey" className="mt-6">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                  <div className="space-y-12">
                    {educationData.map((education, index) => (
                      <div key={education.id} className="relative flex items-start space-x-6">
                        <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-foreground rounded-full shadow-lg">
                          <GraduationCap className="h-6 w-6 text-foreground" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <Card className="border-l-4 border-l-primary shadow-lg bg-card">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="space-y-1">
                                  <h3 className="text-xl font-semibold text-balance text-card-foreground">
                                    {education.degree}
                                  </h3>
                                  <p className="text-card-foreground font-medium">{education.institution}</p>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span>{education.period}</span>
                                </div>
                              </div>

                              <p className="text-muted-foreground mb-4 leading-relaxed">{education.description}</p>

                              <Badge
                                variant={education.status === "current" ? "default" : "secondary"}
                                className={
                                  education.status === "current"
                                    ? "bg-primary hover:bg-primary/80 text-primary-foreground"
                                    : ""
                                }
                              >
                                {education.status === "current" ? "Currently Enrolled" : "Completed"}
                              </Badge>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
