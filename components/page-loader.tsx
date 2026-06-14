'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => setVisible(false), 500)
      return () => clearTimeout(timer)
    }
  }, [fadeOut])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p className="font-mono text-sm tracking-widest text-primary">
        {'<hello world />'}
        <span className="typing-cursor" />
      </p>
    </div>
  )
}
