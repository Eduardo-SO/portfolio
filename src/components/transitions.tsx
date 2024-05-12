'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  use,
  useTransition,
} from 'react'

export const DELAY = 200

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

type TransitionContext = {
  pending: boolean
  navigate: (url: string) => void
}
const Context = createContext<TransitionContext>({
  pending: false,
  navigate: noop,
})
export const usePageTransition = () => use(Context)
export const usePageTransitionHandler = () => {
  const { navigate } = usePageTransition()
  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) navigate(href)
  }

  return onClick
}

type Props = PropsWithChildren<{
  className?: string
}>

export default function Transitions({ children, className }: Props) {
  const [pending, start] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  const navigate = (href: string) => {
    start(async () => {
      router.push(href)
      await sleep(DELAY)
    })
  }

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const a = (e.target as Element).closest('a')

    if (a) {
      const target = a.getAttribute('target')
      if (target) return

      const href = a.getAttribute('href')
      if (href === pathname) return

      e.preventDefault()
      if (href) navigate(href)
    }
  }

  return (
    <Context.Provider value={{ pending, navigate }}>
      <div onClickCapture={onClick} className={className}>
        {children}
      </div>
    </Context.Provider>
  )
}

export function Animate({ children, className }: Props) {
  const { pending } = usePageTransition()
  return (
    <AnimatePresence>
      {!pending && (
        <motion.div
          initial={{
            opacity: 1,
            y: -40,
            maskImage: 'linear-gradient(black 100%, transparent 200%)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            maskImage: [
              'linear-gradient(black -100%, transparent 0%)',
              'linear-gradient(black 0%, transparent 100%)',
              'linear-gradient(black 100%, transparent 200%)',
            ],
          }}
          exit={{
            opacity: 0,
            y: -20,
            maskImage: [
              'linear-gradient(black 100%, transparent 200%)',
              'linear-gradient(black 0%, transparent 100%)',
              'linear-gradient(black -100%, transparent 0%)',
            ],
          }}
          transition={{ duration: 0.2 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
