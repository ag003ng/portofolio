'use client'

import { ArrowUpRight, Database, GitBranch } from 'lucide-react'
import Image from 'next/image'
import { useInView } from '@/lib/hooks/use-inview'
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

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const { ref, isInView } = useInView({ triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`animate-fade-in ${isInView ? 'is-in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SkillIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'python':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
        </svg>
      )
    case 'database':
      return <Database className="h-5 w-5" />
    case 'java':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 19.802c-.16 0-.32-.048-.46-.144-.24-.168-.36-.456-.36-.864v-3.024h-.24c-.336 0-.504-.216-.504-.648V9.504c0-.24.072-.444.216-.612.144-.168.336-.252.576-.252h.24v-1.44c0-.504.156-.924.468-1.26.312-.336.72-.504 1.224-.504h1.44v1.68h-1.08c-.192 0-.348.06-.468.18-.12.12-.18.276-.18.468v1.44h1.68l-.24 1.8h-1.44v3.168c0 .192.06.348.18.468.12.12.276.18.468.18h1.44v1.56c0 .336-.108.612-.324.828-.216.216-.492.324-.828.324h-1.44v.84c0 .384-.12.708-.36.972-.24.264-.564.396-.972.396zm5.76-13.68c-.336 0-.612.108-.828.324-.216.216-.324.492-.324.828v5.76c0 .336.108.612.324.828.216.216.492.324.828.324.336 0 .612-.108.828-.324.216-.216.324-.492.324-.828v-5.76c0-.336-.108-.612-.324-.828-.216-.216-.492-.324-.828-.324zm4.08.36c-.336 0-.612.108-.828.324-.216.216-.324.492-.324.828v5.4c0 .336.108.612.324.828.216.216.492.324.828.324.336 0 .612-.108.828-.324.216-.216.324-.492.324-.828v-5.4c0-.336-.108-.612-.324-.828-.216-.216-.492-.324-.828-.324z" />
        </svg>
      )
    case 'git':
      return <GitBranch className="h-5 w-5" />
    default:
      return null
  }
}

export function PortfolioContent() {
  return (
    <main className="flex flex-col gap-20 py-16 lg:w-1/2 lg:py-24">
      {/* About */}
      <FadeIn>
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
      </FadeIn>

      {/* Skills */}
      <FadeIn>
        <section id="skills" aria-label="Skills" className="scroll-mt-24">
          <SectionHeading>Skills</SectionHeading>
          <ul className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} delay={index * 100}>
                <li
                  className="card-shine group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,200,200,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <SkillIcon icon={skill.icon} />
                    </div>
                    <h4 className="font-mono text-base font-semibold text-foreground">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Projects */}
      <FadeIn>
        <section id="projects" aria-label="Projects" className="scroll-mt-24">
          <SectionHeading>Projects</SectionHeading>
          <ul className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <li key={project.name}>
                <a
                  href={project.repoUrl || profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-shine group link-underline btn-press block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,200,200,0.1)]"
                >
                  {project.images && project.images.length > 0 && (
                    <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                      <Image
                        src={project.images[0]}
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
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
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <footer className="border-t border-border pt-8 font-mono text-xs text-muted-foreground">
        Built by {profile.name}. Designed with care, coded in v0.
      </footer>
    </main>
  )
}
