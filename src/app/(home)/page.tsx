'use client'

import { Header } from '@/components/ui/header'
import { Hero } from './components/hero'
import { Techs } from './components/techs'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-background px-8">
      <Header />
      <Hero />
      <Techs />
      <Projects />
      <Skills className="my-32" />
      <Contact />
      <Footer />
    </main>
  )
}
