'use Client'

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target } from "lucide-react"

export function AboutSection() {
  
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
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
          <div className={`space-y-8`}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software engineering student with a love for creating digital experiences that make a
                difference. Currently pursuing my degree while building real-world applications that solve meaningful
                problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity about how websites work, and has evolved into a deep
                appreciation for clean code, user experience, and the intersection of design and functionality.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm a Software Engineering Student at
                <span className="text-foreground font-medium"> The Open University of Sri Lanka</span>, specializing in
                full-stack development. I contribute to open-source projects and am always eager to learn new
                technologies and best practices.
              </p>
            </div>
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
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
