export function About() {
  return (
    <section id="about" className="border-t border-border bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">About Me</h2>

          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              {
                "I'm a passionate software engineering undergraduate with a strong foundation in computer science and a drive to create impactful solutions. My journey in tech began with curiosity about how things work, which has evolved into a dedication to building efficient, scalable applications."
              }
            </p>

            <p>
              Currently pursuing my degree in Software Engineering, I focus on full-stack development, algorithms, and
              modern web technologies. I believe in writing clean, maintainable code and continuously learning new
              technologies to stay at the forefront of software development.
            </p>

            <p>
              When {"I'm"} not coding, you can find me contributing to open-source projects, reading about emerging
              technologies, or collaborating with fellow developers on innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
