"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-semibold text-foreground">
          Portfolio
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </button>
            </li>
          </ul>

          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
    </header>
  )
}
