'use client'

import { useEffect, useState } from 'react'
import { profile, navItems } from '@/lib/portfolio-data'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.595 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function PortfolioSidebar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const item of navItems) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:w-1/2 lg:py-24 py-16">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm tracking-widest text-primary">
            {'<hello world />'}
          </p>
          <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>
          <h2 className="text-lg font-medium text-foreground/90">
            {profile.role}
          </h2>
          <p className="max-w-xs text-pretty leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
        </div>

        <nav aria-label="In-page navigation" className="hidden lg:block">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? 'w-16 bg-primary'
                          : 'w-8 bg-muted-foreground/40 group-hover:w-12 group-hover:bg-foreground'
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'text-primary'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <a
        href={profile.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-fit items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Visit my GitHub profile"
      >
        <GithubIcon className="h-5 w-5" />
        <span className="text-sm">GitHub</span>
      </a>
    </header>
  )
}
