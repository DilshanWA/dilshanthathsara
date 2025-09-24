import { Card, CardContent } from "@/components/ui/card"
import { Award, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] sm:h-[550px] md:h-[600px] lg:h-[500px]">
            <img
              src="/image03.png"
              alt="Dilshan Thathsara Madusanka - About"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        </div>


          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Software Engineering undergraduate with a deep love for creating innovative solutions
                and building impactful software. My journey in technology began with curiosity and has evolved into a
                commitment to excellence in every project I undertake.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my degree while actively participating in coding competitions, tech communities, and
                real-world projects. I believe in continuous learning and staying updated with the latest technological
                advancements.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">Academic Excellence</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Maintaining strong academic performance while actively participating in programming competitions and
                    tech societies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">Passionate & Ambitious</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Driven by passion for technology and ambitious goals to create meaningful impact through innovative
                    software solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div classNadivme="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
             */}
          
          </div>
        </div>
      </div>
    </section>
  )
}
