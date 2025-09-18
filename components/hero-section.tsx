"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Terminal, Code2, Cpu, Database } from "lucide-react"

const codeSnippets = [
  "const developer = new SoftwareEngineer();",
  "developer.skills = ['React', 'Node.js', 'Python'];",
  "developer.passion = 'Building innovative solutions';",
  "developer.status = 'Ready to create amazing things';",
  "// Always learning, always growing",
]

const techIcons = [
  { icon: Code2, label: "Frontend", delay: "0s" },
  { icon: Database, label: "Backend", delay: "0.5s" },
  { icon: Cpu, label: "AI/ML", delay: "1s" },
  { icon: Terminal, label: "DevOps", delay: "1.5s" },
]

const MatrixRain = () => {
  const characters = "01";
  const columns = 20;
  const rows = 20;

  const [matrix, setMatrix] = useState<string[][]>([]);

  useEffect(() => {
    // Generate random 0/1 matrix only on client
    const newMatrix = Array.from({ length: columns }, () =>
      Array.from({ length: rows }, () =>
        characters[Math.floor(Math.random() * characters.length)]
      )
    );
    setMatrix(newMatrix);
  }, []);

  if (matrix.length === 0) return null; // Render nothing until client

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {matrix.map((col, i) => (
        <div
          key={i}
          className="absolute text-primary font-mono text-sm matrix-rain"
          style={{
            left: `${(i / columns) * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {col.map((char, j) => (
            <div key={j} className="opacity-50">
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;


const TerminalWindow = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLine < codeSnippets.length) {
      const text = codeSnippets[currentLine]
      let index = 0

      const typeInterval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentLine((prev) => (prev + 1) % codeSnippets.length)
            setDisplayedText("")
          }, 2000)
        }
      }, 50)

      return () => clearInterval(typeInterval)
    }
  }, [currentLine])

  return (
    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm terminal-glow">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-muted-foreground ml-2">dilshan@portfolio:~$</span>
      </div>

      <div className="space-y-2">
        {codeSnippets.slice(0, currentLine).map((line, index) => (
          <div key={index} className="text-primary code-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <span className="text-chart-2">{">"}</span> {line}
          </div>
        ))}

        <div className="text-primary">
          <span className="text-chart-2">{">"}</span> {displayedText}
          <span className="terminal-cursor text-primary">|</span>
        </div>
      </div>
    </div>
  )
}

const FloatingTechIcons = () => {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      {techIcons.map((tech, index) => (
        <div
          key={tech.label}
          className="absolute float-3d"
          style={{
            top: `${20 + index * 15}%`,
            right: `${10 + (index % 2) * 20}%`,
            animationDelay: tech.delay,
          }}
        >
          <div className="bg-primary/10 p-3 rounded-lg backdrop-blur-sm border border-primary/20 hologram-flicker">
            <tech.icon className="w-6 h-6 text-primary" />
            <div className="text-xs text-primary mt-1 text-center">{tech.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black-to-br from-background via-muted to-secondary"
    >
      <MatrixRain />
      <FloatingTechIcons />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Terminal/Code Section */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="text-primary font-mono text-lg fade-in-up">Hello, I'm</div>

              <h1
                className="text-5xl lg:text-7xl font-bold text-foreground fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Dilshan
                <br />
                <span className="text-primary hologram-flicker">Thathsara</span>
                <br />
                Madusanka
              </h1>

              <div className="text-xl lg:text-2xl text-muted-foreground fade-in-up" style={{ animationDelay: "0.4s" }}>
                <span className="text-primary">Software Engineering Undergraduate</span>
                <br />
              </div>
            </div>

            

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer text-primary-foreground font-semibold group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform " />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary cursor-pointer text-primary hover:bg-primary/10 bg-transparent"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View LinkedIn
              </Button>
            </div>

            <div
              className="flex justify-center lg:justify-start space-x-6 pt-4 fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Right Side - Introduction */}
          <div className="space-y-8">
            <div className="text-primary font-mono text-sm mb-4 fade-in-up">{"//"} Welcome to my digital workspace</div>

            <TerminalWindow />

            <div className="grid grid-cols-2 gap-4 fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="bg-muted/50 p-4 rounded-lg border border-primary/20 backdrop-blur-sm">
                <div className="text-primary text-2xl font-bold">50+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg border border-primary/20 backdrop-blur-sm">
                <div className="text-primary text-2xl font-bold">3+</div>
                <div className="text-muted-foreground text-sm">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up"
        style={{ animationDelay: "1.2s" }}
      >
        <button
          onClick={scrollToNext}
          className="animate-bounce text-primary hover:text-primary/80 transition-colors group"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-70">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}
