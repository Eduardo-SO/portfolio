import { useContext, useRef, useState } from 'react'
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
      className="flex h-[80vh] w-full max-w-7xl flex-col items-center justify-center gap-8 rounded-xl border border-slate-800 px-6 py-28"
      animate={{
        backgroundImage: isHovered
          ? 'radial-gradient(100% 100% at 50% 3.33067%, rgba(0, 0, 0, 0) 0%, rgb(0, 85, 196) 51.0417%, rgb(117, 165, 255) 100%)'
          : 'radial-gradient(34.6317% 25% at 50% 3.33067%, rgba(0, 0, 0, 0) 0%, rgba(79, 0, 196, 0) 51.0417%, rgba(172, 117, 255, 0) 100%)',
      }}
    >
      <span className="text-5xl font-bold">Have a dream project?</span>
      <span className="max-w-xl text-center text-muted-foreground">
        Let&apos;s transform your vision into stunning reality. Reach out today
        and start the journey to a remarkable brand presence.
      </span>

      <BackgroundGradient
        animate={!isHovered}
        containerClassName="p-[2px] mt-8"
        glowClassName="rounded-full"
      >
        <Button
          asChild
          variant="outline"
          className="h-20 rounded-full border-transparent p-1 px-16 text-4xl font-semibold text-muted-foreground text-white hover:bg-white hover:text-black"
        >
          <motion.button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Entre em contato
          </motion.button>
        </Button>
      </BackgroundGradient>
    </motion.div>
  )
}
