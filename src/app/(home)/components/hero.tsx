import { motion, Variants } from 'framer-motion'
import { TechsCarousel } from './techs-carousel'

const heroVariants: Variants = {
  hidden: {
    y: 120,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
}

export function Hero() {
  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="animate"
      className="flex w-full max-w-7xl flex-col items-center justify-center py-48 pb-24 text-center"
    >
      <motion.div
        variants={heroVariants}
        className="mb-4 flex items-center gap-2 rounded-full border border-muted px-3 py-1 text-sm"
      >
        <div className="h-2 w-2 overflow-visible rounded-full bg-green-400 shadow-green-300">
          <div className="z-10 h-2 w-2 animate-ping rounded-full bg-green-400 shadow-green-300" />
        </div>
        Disponível para serviço
      </motion.div>

      <motion.h1
        variants={heroVariants}
        className="mb-8 py-4 text-center text-7xl font-bold tracking-tight md:text-7xl"
      >
        Olá, sou o Eduardo!
        <br />
        Desenvolvedor React
      </motion.h1>

      <motion.h3
        variants={heroVariants}
        className="mb-16 text-lg text-muted-foreground"
      >
        Desenvolvedor front-end React disposto em aprender cada vez mais.
        <br />
        Criando experiências criativas e modernas!
      </motion.h3>

      <motion.div variants={heroVariants}>
        <TechsCarousel />
      </motion.div>
    </motion.div>
  )
}
