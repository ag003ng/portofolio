import { ArrowUpRight } from 'lucide-react'
import {
  aboutParagraphs,
  skills,
  projects,
  profile,
} from '@/lib/portfolio-data'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-primary lg:hidden">
      {children}
    </h3>
  )
}

export function PortfolioContent() {
  return (
    <main className="flex flex-col gap-20 py-16 lg:w-1/2 lg:py-24">
      {/* About */}
      <section id="about" aria-label="About me" className="scroll-mt-24">
        <SectionHeading>About</SectionHeading>
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="text-pretty">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" aria-label="Skills" className="scroll-mt-24">
        <SectionHeading>Skills</SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <h4 className="font-mono text-base font-semibold text-foreground">
                {skill.name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" aria-label="Projects" className="scroll-mt-24">
        <SectionHeading>Projects</SectionHeading>
        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h4>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-border pt-8 font-mono text-xs text-muted-foreground">
        Built by {profile.name}. Designed with care, coded in v0.
      </footer>
    </main>
  )
}
