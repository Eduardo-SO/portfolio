import { cn } from '@/lib/utils'
import { Variants, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type FancyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const button: Variants = {
  rest: {
    padding: '12px 24px 12px 24px',
    background: 'linear-gradient(to right, #00000000, #00000000)',
  },
  hover: {
    padding: '12px 40px 12px 24px',
    background: 'linear-gradient(to right, #ffffff, #ffffff)',
  },
}

const arrow: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
}

export function FancyButton({ children, className }: FancyButtonProps) {
  return (
    <motion.button
      variants={button}
      initial="rest"
      whileHover="hover"
      className={cn(
        'relative flex items-center justify-start gap-8 rounded-full border border-secondary text-sm font-semibold text-transparent hover:text-black',
        className,
      )}
    >
      <div className="whitespace-nowrap bg-gradient-to-r from-zinc-500 to-white bg-clip-text">
        {children}
      </div>

      <motion.div className="absolute right-4 inline-block" variants={arrow}>
        <ArrowRight size={18} />
      </motion.div>
    </motion.button>
  )
}
