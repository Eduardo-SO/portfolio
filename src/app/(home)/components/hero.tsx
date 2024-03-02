import { motion, Variants } from 'framer-motion'
import { TechsCarousel } from './techs-carousel'

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1.2,
      delayChildren: 1.1,
    },
  },
}

export function Hero() {
  return (
    <div className="flex h-[90vh] w-full max-w-7xl flex-col items-center justify-center gap-8 p-24 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="mb-4 flex items-center gap-2 rounded-full border border-muted px-3 py-1"
      >
        <div className="h-2 w-2 rounded-full bg-green-400 shadow-xl shadow-green-300" />
        Disponível para serviço
      </motion.div>

      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="animate"
        className="w-full"
      >
        <h1 className="mb-8 py-4 text-center text-7xl font-bold tracking-tight md:text-7xl">
          Olá, sou o Eduardo!
          <br />
          Desenvolvedor React
        </h1>

        <h3 className="text-lg text-muted-foreground">
          Desenvolvedor front-end React disposto em aprender cada vez mais.
          <br />
          Criando experiências criativas e modernas!
        </h3>
      </motion.div>

      <motion.div variants={heroVariants} initial="hidden" animate="animate">
        <TechsCarousel />
      </motion.div>
    </div>
  )
}
