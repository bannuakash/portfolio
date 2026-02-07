// This file is a Server Component by default, allowing metadata export
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import AOS Initializer as a Client Component
import AosInitializer from './components/AosInitializer'

// Font imports - These are handled server-side by Next.js
import { Dancing_Script } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Akash Jannu - Portfolio',
  icons: {
    icon: '/favicon/android-chrome-512x512.png',
  },
}

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* AOS initialization now happens in a separate Client Component */}
        <AosInitializer />
        {children}
      </body>
    </html>
  )
} 