import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { withBasePath } from '@/lib/base-path'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Agung Ahmad Rifai — Information Systems Student',
  description:
    'Portfolio of Agung Ahmad Rifai, an Information Systems student. Generalist mind, results-driven builder.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: withBasePath('/icon-light-32x32.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: withBasePath('/icon-dark-32x32.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: withBasePath('/icon.svg'),
        type: 'image/svg+xml',
      },
    ],
    apple: withBasePath('/apple-icon.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1f2b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
