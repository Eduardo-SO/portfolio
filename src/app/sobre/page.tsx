import { AboutMe } from './components/about-me'
import { Tools } from './components/tools'
import { Experience } from './components/experience'
import { Contact } from '@/components/ui/contact'

export default function Sobre() {
  return (
    <main className="mt-36 flex min-h-screen flex-col items-center bg-background px-4">
      <div className="flex w-full max-w-8xl flex-col items-center gap-6">
        <AboutMe />
        <Tools />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
