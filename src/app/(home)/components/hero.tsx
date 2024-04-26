import { motion, Variants } from 'framer-motion'

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
      className="flex w-full max-w-4xl flex-col items-center justify-center pb-20 pt-44 text-center"
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
        className="mb-8 py-4 text-center text-4xl font-bold tracking-tight md:text-7xl"
      >
        Olá, sou o Eduardo!
        <br />
        Desenvolvedor React
      </motion.h1>

      <motion.h3
        variants={heroVariants}
        className="text-lg text-muted-foreground"
      >
        Eduardo Souza é um desenvolvedor front-end React baseado no Brasil,
        apaixonado por aprender e criar experiências digitais criativas e
        modernas.
      </motion.h3>
    </motion.div>
  )
}
