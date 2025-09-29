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
    title: "Advanced Level (A/L)",
    subtitle: "Walasmulla National School",
    description: "Completed - 2018-2020",
    status: "completed",
  },
]

const achievements = [
  {
    title: "Coming Soon",
    subtitle: "Stay Tuned",
    description: "Achievements will be added here soon.",
  },
]

const certifications = [
  {
    title: "Full-Stack Web Development",
    subtitle: "DP Education",
    description: "",
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
    title: "Coming Soon",
    subtitle: "To Be Updated",
    description: "Experience details will be added here soon.",
  },
]

export function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-auto  text-foreground py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-3xl mx-auto  sm:mt-8 lg:mt-5">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Education</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance mt-2"></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* 
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-balance">
                Coding with Purpose<br /><span className="text-foreground">Learning with Passion</span>
                <br />
              </h2>
                 

              <p className="text-md text-muted-foreground leading-relaxed max-w-2xl text-balance">
                My journey as a software engineering undergraduate isn’t 
                just about collecting grades or certificates — it’s about 
                building a mindset. From exploring full-stack development 
                to diving deep into mathematics and physics, every step 
                has sharpened my problem-solving and creative thinking. 
                Education for me isn’t a checklist — it’s a foundation 
                I use to experiment, innovate, and prepare for the challenges of tomorrow.
              </p>
            </div>
          </div>*/
          }

          {/* Right Column - Education Details with Tabs */}
          <div className="space-y-4 sm:space-y-6">
            <Tabs defaultValue="qualifications" className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-transparent gap-1 h-auto p-2">
                <TabsTrigger
                  value="qualifications"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground text-xs sm:text-sm px-2 py-2 sm:px-3 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Academic</span>
                  <span className="sm:hidden">Academic</span>
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground text-xs sm:text-sm px-2 py-2 sm:px-3"
                >
                  Achievements
                </TabsTrigger>
                <TabsTrigger
                  value="certifications"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground text-xs sm:text-sm px-2 py-2 sm:px-3 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Certifications</span>
                  <span className="sm:hidden">Certs</span>
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground text-xs sm:text-sm px-2 py-2 sm:px-3"
                >
                  Experience
                </TabsTrigger>
              </TabsList>

              <TabsContent value="qualifications" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                {qualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {qualification.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">- {qualification.subtitle}</p>
                      </div>
                      <div className="flex flex-col sm:text-right space-y-1">
                        <span className="text-card-foreground font-medium text-sm">{qualification.description}</span>
                        <Badge
                          variant={qualification.status === "current" ? "default" : "secondary"}
                          className={
                            qualification.status === "current"
                              ? "bg-primary hover:bg-white text-primary-foreground self-start sm:self-end"
                              : "self-start sm:self-end"
                          }
                        >
                          {qualification.status === "current" ? "Current" : "Completed"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="achievements" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">- {achievement.subtitle}</p>
                      </div>
                      <div className="sm:text-right">
                        <span className="text-card-foreground font-medium text-sm">{achievement.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="certifications" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                {certifications.map((certification, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {certification.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">- {certification.subtitle}</p>
                      </div>
                      <div className="sm:text-right">
                        <span className="text-card-foreground font-medium text-sm">{certification.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="experience" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-semibold group-hover:text-foreground transition-colors text-card-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-card-foreground font-medium text-sm sm:text-base">{exp.subtitle}</p>
                      </div>
                      <div className="sm:text-right">
                        <span className="text-card-foreground font-medium text-sm">{exp.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="academic-journey" className="mt-4 sm:mt-6">
                <div className="relative">
                  <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                  <div className="space-y-8 sm:space-y-12">
                    {educationData.map((education, index) => (
                      <div key={education.id} className="relative flex items-start space-x-4 sm:space-x-6">
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-background border-4 border-foreground rounded-full shadow-lg flex-shrink-0">
                          <GraduationCap className="h-4 w-4 sm:h-6 sm:w-6 text-foreground" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <Card className="border-l-4 border-l-primary shadow-lg bg-card">
                            <CardContent className="p-4 sm:p-6">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                                <div className="space-y-1">
                                  <h3 className="text-lg sm:text-xl font-semibold text-balance text-card-foreground">
                                    {education.degree}
                                  </h3>
                                  <p className="text-card-foreground font-medium text-sm sm:text-base">
                                    {education.institution}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span>{education.period}</span>
                                </div>
                              </div>

                              <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                                {education.description}
                              </p>

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
