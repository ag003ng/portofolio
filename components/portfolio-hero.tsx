'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { profile } from '@/lib/portfolio-data'

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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function PortfolioHero() {
  const [typedTagline, setTypedTagline] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const text = profile.tagline
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypedTagline(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-20 pb-12 sm:px-10 lg:min-h-[60vh] lg:flex-row lg:items-center lg:gap-12 lg:px-16">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-primary/30 shadow-[0_0_30px_rgba(0,200,200,0.15)] transition-shadow hover:shadow-[0_0_40px_rgba(0,200,200,0.25)] lg:h-36 lg:w-36">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          className="object-cover"
          sizes="144px"
          priority
        />
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center lg:mt-0 lg:items-start lg:text-left">
        <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="text-lg font-medium text-foreground/90 sm:text-xl">
          {profile.role}
        </h2>
        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          {typedTagline}
          {showCursor && <span className="typing-cursor" />}
        </p>
        <div className="mt-2 flex items-center gap-6">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Visit my GitHub profile"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Visit my Instagram profile"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="text-sm">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
