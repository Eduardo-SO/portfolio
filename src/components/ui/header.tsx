'use client'

import { useState } from 'react'
import { Variants, motion } from 'framer-motion'
import { Github, Linkedin, MenuIcon, XIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const variants: Record<string, Variants> = {
  overlay: {
    closed: {
      padding: '0px 0px 0px 0px',
      borderRadius: '0px',
    },
    opened: {
      padding: '16px 16px 0px 16px',
      borderRadius: '5px',
      transition: {
        duration: 0.3,
      },
    },
  },
  container: {
    closed: {
      borderRadius: '0rem',
      borderBottomWidth: '1px',
      width: '100%',
      padding: '10px 20px',
      transition: {
        duration: 0.3,
      },
    },
    opened: {
      borderRadius: '1rem',
      borderWidth: '1px',
      width: '40%',
      padding: '30px 30px',
      transition: {
        duration: 0.6,
      },
    },
  },
  header: {
    closed: {},
    opened: {},
  },
  content: {
    closed: {
      height: '0px',
      opacity: 0,
      transition: { duration: 0.3 },
    },
    opened: {
      height: 'auto',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  },
  footer: {
    closed: {
      height: '0px',
      opacity: 0,
    },
    opened: {
      height: 'auto',
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.2 },
    },
  },
}

function MobileMenu() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={variants.overlay}
      initial={false}
      animate={isOpen ? 'opened' : 'closed'}
      className={cn('flex w-full items-center justify-end lg:hidden')}
    >
      <motion.div
        variants={variants.container}
        className={cn(
          'flex min-w-72 flex-col items-center justify-between overflow-hidden border-gray-800 bg-black/60 backdrop-blur-lg transition-[border] sm:min-w-96',
        )}
      >
        <motion.div
          variants={variants.header}
          className="flex w-full justify-between"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/perfil.jpg"
              alt="Perfil image"
              width={200}
              height={200}
              className="h-10 w-10 rounded-xl"
            />

            <div className="flex flex-col">
              <strong className="text-sm font-bold">Eduardo Souza</strong>
              <span className="text-xs text-muted-foreground">
                Desenvolvedor React
              </span>
            </div>
          </div>

          <motion.button
            className="flex items-center justify-center gap-4 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIcon id="menu-trigger" />
            ) : (
              <MenuIcon id="menu-trigger" />
            )}
          </motion.button>
        </motion.div>

        <motion.div
          variants={variants.content}
          initial={{ height: '0px', opacity: 0, y: 20 }}
          exit={{ height: '0px', y: 0 }}
          className="flex w-full flex-col items-start gap-4"
        >
          <Separator className="mt-6" />

          <motion.div className="flex w-full flex-col gap-3">
            <motion.span
              variants={variants.content}
              onClick={() => setIsOpen(false)}
            >
              <Button
                asChild
                variant="ghost"
                className={cn(
                  'h-full w-full justify-start px-0 text-2xl text-muted-foreground hover:bg-transparent',
                  pathname === '/' && 'text-foreground',
                )}
              >
                <Link href="/">Home</Link>
              </Button>
            </motion.span>

            <motion.span
              variants={variants.content}
              onClick={() => setIsOpen(false)}
            >
              <Button
                asChild
                variant="ghost"
                className={cn(
                  'h-full w-full justify-start px-0 text-2xl text-muted-foreground hover:bg-transparent',
                  pathname.includes('/projetos') && 'text-foreground',
                )}
              >
                <Link href="/projetos">Projetos</Link>
              </Button>
            </motion.span>

            <motion.span
              variants={variants.content}
              onClick={() => setIsOpen(false)}
            >
              <Button
                asChild
                variant="ghost"
                className={cn(
                  'h-full w-full justify-start px-0 text-2xl text-muted-foreground hover:bg-transparent',
                  pathname.includes('/sobre') && 'text-foreground',
                )}
              >
                <Link href="/sobre">Sobre mim</Link>
              </Button>
            </motion.span>

            <motion.span
              variants={variants.content}
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <BackgroundGradient containerClassName="p-[2px] w-full">
                <Button
                  asChild
                  variant="outline"
                  className={cn(
                    'h-full w-full border-none text-xl text-muted-foreground hover:bg-transparent',
                    pathname.includes('/contato') && 'text-foreground',
                  )}
                >
                  <Link href="/contato" className="w-full">
                    Entre em contato
                  </Link>
                </Button>
              </BackgroundGradient>
            </motion.span>
          </motion.div>

          <Separator className="mt-4" />

          <motion.div
            variants={variants.footer}
            initial={{ opacity: 0, y: 20 }}
            exit={{ height: '0px', y: 0 }}
            className="mb-2 flex w-full items-center justify-center gap-6 text-muted-foreground"
          >
            <a
              href="https://github.com/Eduardo-SO"
              target="_blank"
              className="hover:text-white"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/eduardo-so"
              target="_blank"
              className="hover:text-white"
            >
              <Linkedin />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function DesktopMenu() {
  const pathname = usePathname()

  return (
    <div className="hidden w-full items-center justify-center px-4 lg:flex">
      <div className="flex w-full max-w-8xl items-center justify-between rounded-2xl border border-gray-800 bg-black/40 p-2 backdrop-blur-md">
        <div className="flex w-full items-center gap-3">
          <Image
            src="/perfil.jpg"
            alt="Perfil image"
            width={200}
            height={200}
            className="h-12 w-12 rounded-xl"
          />

          <div className="flex flex-col">
            <strong className="text-sm font-bold">Eduardo Souza</strong>
            <span className="text-xs text-muted-foreground">
              Desenvolvedor React
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-4">
          <Link href="/">
            <Button
              variant="ghost"
              className={cn(
                'h-full text-base text-muted-foreground hover:bg-transparent',
                pathname === '/' && 'text-foreground',
              )}
            >
              Home
            </Button>
          </Link>

          <Link href="/projetos">
            <Button
              variant="ghost"
              className={cn(
                'h-full text-base text-muted-foreground hover:bg-transparent',
                pathname.includes('/projetos') && 'text-foreground',
              )}
            >
              Projetos
            </Button>
          </Link>

          <Link href="/sobre">
            <Button
              variant="ghost"
              className={cn(
                'h-full text-base text-muted-foreground hover:bg-transparent',
                pathname.includes('/sobre') && 'text-foreground',
              )}
            >
              Sobre mim
            </Button>
          </Link>

          <Link href="/contato">
            <BackgroundGradient containerClassName="p-[2px]">
              <Button
                variant="outline"
                className={cn(
                  'h-full border-none text-base text-muted-foreground hover:bg-transparent',
                  pathname.includes('/contato') && 'text-foreground',
                )}
              >
                Entre em contato
              </Button>
            </BackgroundGradient>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <motion.div
      initial={{
        y: -120,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      }}
      className="fixed z-50 w-full lg:top-4"
    >
      <MobileMenu />
      <DesktopMenu />
    </motion.div>
  )
}
