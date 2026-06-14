'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`btn-press fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(0,200,200,0.15)] ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  )
}
