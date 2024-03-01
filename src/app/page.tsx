'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

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
      staggerChildren: 0.2,
      delayChildren: 1.1,
    },
  },
}

const techs = [
  <Image key={1} width={48} height={48} alt="" src="/techs/chat-gpt.png" />,
  <Image key={2} width={48} height={48} alt="" src="/techs/css.png" />,
  <Image key={3} width={48} height={48} alt="" src="/techs/figma.png" />,
  <Image key={4} width={48} height={48} alt="" src="/techs/framer.png" />,
  <Image key={5} width={48} height={48} alt="" src="/techs/git.png" />,
  <Image key={6} width={48} height={48} alt="" src="/techs/github.png" />,
  <Image key={7} width={48} height={48} alt="" src="/techs/html.png" />,
  <Image key={8} width={48} height={48} alt="" src="/techs/monday.png" />,
  <Image key={9} width={48} height={48} alt="" src="/techs/next.png" />,
  <Image key={10} width={48} height={48} alt="" src="/techs/react.png" />,
  <Image key={11} width={48} height={48} alt="" src="/techs/shadcn.png" />,
  <Image key={12} width={48} height={48} alt="" src="/techs/tailwind.png" />,
  <Image key={13} width={48} height={48} alt="" src="/techs/typescript.png" />,
  <Image key={14} width={48} height={48} alt="" src="/techs/zod.png" />,
]

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden bg-background">
      <div className="fixed top-0 flex w-full items-center justify-center p-8">
        <div className="flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-gray-800 bg-black/40 p-2 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Image
              src="/perfil.jpg"
              alt="Perfil image"
              width={200}
              height={200}
              className="h-12 w-12 rounded-xl"
            />

            <div className="flex flex-col">
              <strong className="font-bold">Eduardo Souza</strong>
              <span className="text-xs text-muted-foreground">
                Desenvolvedor React
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="h-full text-base text-muted-foreground hover:bg-transparent"
            >
              Home
            </Button>

            <Button
              variant="ghost"
              className="h-full text-base text-muted-foreground hover:bg-transparent"
            >
              Projetos
            </Button>

            <Button
              variant="ghost"
              className="h-full text-base text-muted-foreground hover:bg-transparent"
            >
              Sobre mim
            </Button>

            <BackgroundGradient containerClassName="p-[2px]">
              <Button
                variant="outline"
                className="h-full border-transparent p-1 text-base text-muted-foreground"
              >
                Entre em contato
              </Button>
            </BackgroundGradient>
          </div>
        </div>
      </div>

      <div className="flex h-[90vh] w-full max-w-7xl flex-col items-center justify-center gap-8 p-24 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-2 rounded-full border border-muted px-3 py-1"
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
          <motion.h1 className="mb-8 py-4 text-center text-7xl font-bold tracking-tight md:text-7xl">
            Olá, sou o Eduardo!
            <br />
            Desenvolvedor React
          </motion.h1>

          <motion.h3 className="text-lg text-muted-foreground">
            Desenvolvedor front-end React disposto em aprender cada vez mais.
            <br />
            Criando experiências criativas e modernas!
          </motion.h3>
        </motion.div>

        <InfiniteMovingCards items={techs} className="mt-12" />
      </div>
    </main>
  )
}
