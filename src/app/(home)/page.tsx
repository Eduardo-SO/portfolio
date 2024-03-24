'use client'

import { Header } from '@/components/header'
import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { StickyScroll } from '@/components/ui/sticky-scroll'
import { Skills } from './components/skills'

export default function Home() {
  return (
    <main className="sticky top-0 flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden bg-background">
      <Header />
      <Hero />
      <Projects />
      <StickyScroll />
      <Skills />
    </main>
  )
}
