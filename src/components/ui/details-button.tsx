import { Variants, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type DetailsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const button: Variants = {
  rest: {
    padding: '12px 24px 12px 24px',
    background: 'linear-gradient(to right, #00000000, #00000000)',
  },
  hover: {
    padding: '12px 40px 12px 24px',
    background: 'linear-gradient(to right, #7b61ff, #00ccb1)',
  },
}

const arrow: Variants = {
  rest: { opacity: 0, rotate: -180 },
  hover: { opacity: 1, rotate: 0 },
}

export function DetailsButton({ children }: DetailsButtonProps) {
  return (
    <motion.button
      variants={button}
      className="relative flex items-center justify-start gap-8 rounded-full border border-zinc-900 text-sm font-semibold text-transparent hover:text-white"
    >
      <div className="whitespace-nowrap bg-gradient-to-r from-[#7b61ff] to-[#00ccb1] bg-clip-text">
        {children}
      </div>

      <motion.div
        className="absolute right-4 inline-block rounded-full bg-zinc-600 p-1"
        variants={arrow}
      >
        <ArrowRight size={14} />
      </motion.div>
    </motion.button>
  )
}
