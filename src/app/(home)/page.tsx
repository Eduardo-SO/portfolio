'use client'

import { Header } from '@/components/header'
import { Hero } from './components/hero'

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden bg-background">
      <Header />
      <Hero />

      <div>
        <p>Projects</p>
      </div>
    </main>
  )
}
