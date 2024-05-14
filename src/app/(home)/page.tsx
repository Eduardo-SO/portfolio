'use client'

import { Hero } from './components/hero'
import { Techs } from './components/techs'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Contact } from '@/components/ui/contact'
import { FAQs } from './components/faqs'

export default function Home() {
  return (
    <div className="mt-36 flex flex-col items-center justify-between bg-background px-4">
      <Hero />
      <Techs />
      <Projects />
      <Skills />
      <FAQs />
      <Contact />
    </div>
  )
}
