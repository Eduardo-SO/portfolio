import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type FancyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function FancyButton({ children }: FancyButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{
        width: 'auto',
      }}
      animate={{
        width: 'auto',
      }}
      className="relative flex h-9 items-center justify-center gap-8 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm hover:bg-secondary/80"
    >
      {children}

      <motion.div
        className="inline-block"
        initial={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0,
        }}
        animate={{
          position: isHovered ? 'relative' : 'absolute',
          right: isHovered ? 'unset' : 20,
          opacity: isHovered ? 1 : 0,
        }}
      >
        <ArrowRight />
      </motion.div>
    </motion.button>
  )
}
