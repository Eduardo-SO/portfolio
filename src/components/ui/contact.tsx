'use client'

import { useContext, useRef, useState } from 'react'
import Link from 'next/link'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'

import { LayoutContext } from '@/contexts/layout-context'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [isHovered, setIsHovered] = useState(false)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  const { handleSetContactProgression } = useContext(LayoutContext)

  const { scrollYProgress } = useScroll({
    target: contactSectionRef,
    offset: ['start end', 'end end'],
  })

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useMotionValueEvent(smoothed, 'change', (latest) => {
    handleSetContactProgression(latest)
  })

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={contactSectionRef}
      className="relative flex w-full max-w-8xl flex-col items-center justify-center gap-8 rounded-xl border border-zinc-800 px-7 py-20 text-center"
      animate={{
        backgroundImage: isHovered
          ? 'radial-gradient(100% 100% at 50% 3.33067%, rgba(0,0,0,1) 0%, #382886 50%, #017e6d 100%)'
          : 'radial-gradient(34.6317% 25% at 50% 3.33067%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 51.0417%, rgba(0, 0, 0, 1) 100%)',
      }}
    >
      <span className="text-4xl font-bold md:text-5xl">
        Da Ideia à interface
      </span>
      <span className="mb-8 max-w-2xl text-lg font-medium text-muted-foreground">
        Estou aqui para transformar visões em realidades impressionantes.
        <br />
        Vamos criar algo incrível juntos!
      </span>

      <Link href="/contato">
        <BackgroundGradient
          animate={!isHovered}
          containerClassName="p-1"
          glowClassName="rounded-full"
        >
          <Button
            asChild
            variant="outline"
            className="rounded-full border-none px-8 py-6 text-lg font-medium text-muted-foreground text-white hover:bg-transparent sm:px-12 sm:py-12 sm:text-4xl md:py-14 md:text-5xl"
          >
            <motion.button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Entre em contato
            </motion.button>
          </Button>
        </BackgroundGradient>
      </Link>
    </motion.div>
  )
}
