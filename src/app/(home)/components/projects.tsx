import { Button } from '@/components/ui/button'
import { FancyButton } from '@/components/ui/fancy-button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  primaryBackground: string
  secondaryBackground: string
  primaryBackgroundColor: string
}

interface ProjectsProps {
  className?: string
}

function ProjectCard({
  title,
  description,
  primaryBackground,
  secondaryBackground,
  primaryBackgroundColor,
}: ProjectCardProps) {
  return (
    <div className="relative flex h-[300px] items-end overflow-hidden rounded-xl p-6">
      <motion.div
        className="absolute inset-0"
        initial={{ filter: 'brightness(50%)' }}
        whileHover={{ scale: 1.02, filter: 'brightness(30%)' }}
        transition={{
          ease: 'easeIn',
          duration: 0.4,
        }}
      >
        <motion.div
          whileHover={{ filter: 'opacity(0)' }}
          className={cn(
            'absolute z-10 flex h-full w-full items-end justify-center',
            primaryBackgroundColor,
          )}
        >
          <Image
            src={primaryBackground}
            alt=""
            width={300}
            height={300}
            unoptimized
          />
        </motion.div>

        <Image src={secondaryBackground} alt="" fill={true} />
      </motion.div>

      <div className="z-20 flex flex-col">
        <p className="text-xl font-bold">{title}</p>
        <p className="font-bold text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function Projects({ className }: ProjectsProps) {
  return (
    <motion.div
      className={cn(className, 'flex w-full flex-col items-center gap-12')}
      initial={{
        y: 120,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1.5,
        },
      }}
    >
      <div className="grid w-full max-w-7xl gap-4 md:grid-cols-2">
        <ProjectCard
          title="Be The Hero"
          description="App para adoção de animais em ONGs"
          primaryBackgroundColor="bg-red-500"
          primaryBackground="/projects/bth-hero.svg"
          secondaryBackground="/projects/bth.gif"
        />

        <ProjectCard
          title="Ecoleta"
          description="App para gerenciar coleta de entulhos"
          primaryBackgroundColor="bg-emerald-500"
          primaryBackground="/projects/ecoleta-hero.svg"
          secondaryBackground="/projects/ecoleta.gif"
        />
      </div>

      <FancyButton>Ver todos os projetos</FancyButton>
    </motion.div>
  )
}
