'use client'

import { Contact } from '@/components/ui/contact'
import { ProjectCard } from '@/components/ui/project-card'
import { motion } from 'framer-motion'

export default function Projetos() {
  return (
    <main className="mt-36 flex min-h-screen flex-col items-center bg-background px-4">
      <motion.div
        className="mb-24 flex w-full flex-col items-center gap-12"
        initial={{
          y: 120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.5,
          },
        }}
      >
        <div className="grid w-full max-w-8xl gap-12 md:grid-cols-2 md:gap-4">
          <ProjectCard
            title="Be The Hero"
            description="Conectar doadores à ONGs"
            primaryBackground="/projects/bth-hero.webp"
            secondaryBackground="/projects/bth.gif"
            link="https://github.com/Eduardo-SO/be-the-hero"
          />

          <ProjectCard
            title="Ecoleta"
            description="Gerenciar coleta de entulhos"
            primaryBackground="/projects/ecoleta-hero.jpg"
            secondaryBackground="/projects/ecoleta.gif"
            link="https://github.com/Eduardo-SO/Ecoleta"
          />

          <div className="hidden md:block">
            <ProjectCard
              title="Proffy"
              description="Conectar alunos e professores"
              primaryBackground="/projects/proffy-hero.jpg"
              link="https://github.com/Eduardo-SO/Proffy"
            />
          </div>

          <div className="hidden md:block">
            <ProjectCard
              title="GoBarber"
              description="Agendamento de serviços de barbearia"
              primaryBackground="/projects/gobarber-hero.jpg"
              link="https://github.com/Eduardo-SO/GoBarber"
            />
          </div>
        </div>
      </motion.div>

      <Contact />
    </main>
  )
}
