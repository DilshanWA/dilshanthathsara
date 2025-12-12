import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
          {/* Content - Left Side */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Software Engineer Undergraduate
                </div>
                <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Dilshan T<br />
                  Madusanka
                </h1>
              </div>
              <p className="text-pretty text-xl text-muted-foreground md:text-2xl">
                Building elegant solutions through clean code and thoughtful design. Passionate about creating impactful
                software experiences.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
              <Button size="lg" className="gap-2 text-base">
                <Mail className="h-5 w-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent text-base">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent text-base">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="relative shrink-0">
            {/* Decorative elements */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl ring-2 ring-primary/20 md:h-96 md:w-96">
              <Image
                src="/software-engineer-portrait.png"
                alt="Dilshan T Madusanka"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
