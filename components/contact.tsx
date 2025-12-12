"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="border-t border-border bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{"Let's Connect"}</h2>
            <p className="text-pretty text-muted-foreground">
              {"I'm always interested in hearing about new opportunities and projects. Feel free to reach out!"}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Connect with me</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    <span>your.email@example.com</span>
                  </a>
                  <a
                    href="https://github.com"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/yourusername</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/yourusername</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>@yourusername</span>
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Current Status</h3>
                <p className="text-pretty text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                    </span>
                    Available for internship opportunities
                  </span>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
