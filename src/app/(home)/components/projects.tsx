// import { DetailsButton } from '@/components/ui/details-button'
import { FancyButton } from '@/components/ui/fancy-button'
import { cn } from '@/lib/utils'
import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  primaryBackground: string
  secondaryBackground: string
}

interface ProjectsProps {
  className?: string
}

const overlay: Variants = {
  rest: {
    filter: 'brightness(50%)',
  },
  hover: {
    scale: 1.02,
    filter: 'brightness(30%)',
  },
}

const imgContainer: Variants = {
  hover: { filter: 'opacity(0)' },
}

const text: Variants = {
  rest: { filter: 'opacity(1)' },
  hover: { filter: 'opacity(0)' },
}

const button: Variants = {
  rest: {
    filter: 'opacity(0) blur(5px)',
    padding: '8px 8px 8px 8px',
  },
  hover: {
    filter: 'opacity(1) blur(0px)',
    padding: '8px 8px 8px 124px',
    transition: {
      delay: 0.1,
      duration: 0.6,
    },
  },
}

const buttonText: Variants = {}

const arrow: Variants = {
  rest: { opacity: 0, rotate: -180 },
  hover: {
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
}

function ProjectCard({
  title,
  description,
  primaryBackground,
  secondaryBackground,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div className="z-20 flex flex-col md:hidden" variants={text}>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm font-semibold text-zinc-500">{description}</p>
      </motion.div>

      <motion.div
        className="relative flex aspect-video max-h-[400px] items-end overflow-hidden rounded-xl border border-zinc-900 p-6"
        initial="rest"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0"
          variants={overlay}
          transition={{
            ease: 'easeIn',
            duration: 0.4,
          }}
        >
          <motion.div
            variants={imgContainer}
            className={cn(
              'absolute z-10 flex h-full w-full items-end justify-center',
            )}
          >
            <Image
              src={primaryBackground}
              alt=""
              fill
              className="from-black via-transparent to-transparent object-cover md:bg-gradient-to-t"
              style={{ objectPosition: '50% 25%' }}
              unoptimized
            />
          </motion.div>

          <Image
            src={secondaryBackground}
            className="object-cover"
            alt=""
            fill
          />
        </motion.div>

        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.button
            variants={button}
            className="relative flex items-center justify-start gap-8 overflow-hidden rounded-full border border-zinc-900 bg-secondary font-semibold text-white"
          >
            <motion.div
              variants={buttonText}
              className="absolute left-4 whitespace-nowrap"
            >
              Ver detalhes
            </motion.div>

            <motion.div
              className="inline-block rounded-full bg-[#7b61ff] p-2"
              variants={arrow}
            >
              <ArrowRight size={24} className="text-white" />
            </motion.div>
          </motion.button>
        </motion.div>

        <motion.div className="z-20 hidden flex-col md:flex" variants={text}>
          <p className="text-xl font-semibold">{title}</p>
          <p className="font-bold text-muted-foreground">{description}</p>
        </motion.div>
      </motion.div>
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
      <div className="grid w-full max-w-8xl gap-12 md:grid-cols-2 md:gap-4">
        <ProjectCard
          title="Be The Hero"
          description="App para conectar doadores à ONGs"
          primaryBackground="/projects/bth-hero.webp"
          secondaryBackground="/projects/bth.gif"
        />

        <ProjectCard
          title="Ecoleta"
          description="App para gerenciar coleta de entulhos"
          primaryBackground="/projects/ecoleta-hero.jpg"
          secondaryBackground="/projects/ecoleta.gif"
        />

        <ProjectCard
          title="Ecoleta"
          description="App para gerenciar coleta de entulhos"
          primaryBackground="/projects/ecoleta-hero.jpg"
          secondaryBackground="/projects/ecoleta.gif"
        />

        <ProjectCard
          title="Be The Hero"
          description="App para conectar doadores à ONGs"
          primaryBackground="/projects/bth-hero.webp"
          secondaryBackground="/projects/bth.gif"
        />
      </div>

      <FancyButton>Ver todos os projetos</FancyButton>
    </motion.div>
  )
}
