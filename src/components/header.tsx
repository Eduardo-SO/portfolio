import { useContext } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { LayoutContext } from '@/contexts/layout-context'
import { Button } from '@/components/ui/button'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { cn } from '@/lib/utils'

// function DesktopHeader() {

// }

export function Header() {
  const { contactProgression } = useContext(LayoutContext)

  return (
    <motion.div
      className={cn('fixed z-50 w-full px-8')}
      style={{ y: `${16 - contactProgression * 100}px` }}
    >
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

        <div className="hidden items-center gap-4 sm:flex">
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
    </motion.div>
  )
}
