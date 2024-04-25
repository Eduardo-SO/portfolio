'use client'

import { cn } from '@/lib/utils'
import { animate, useMotionValue, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

interface InfiniteMovingCardsProps {
  items: JSX.Element[]
  className?: string
}

export const InfiniteMovingCards = ({
  items,
  className,
}: InfiniteMovingCardsProps) => {
  const fastDuration = 60
  const slowDuration = 120

  const [duration, setDuration] = useState(fastDuration)
  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  const [ref, { width }] = useMeasure()
  const xTranslation = useMotionValue(0)

  useEffect(() => {
    const finalPosition = -width / 3 - 28
    let controls

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        duration: duration * (1 - xTranslation.get() / finalPosition),
        ease: 'linear',
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      })
    }

    return controls?.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xTranslation, width, duration, rerender])

  return (
    <div
      className={cn(
        'max-w-[320px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl',
        className,
      )}
    >
      <motion.ul
        ref={ref}
        className="flex w-max min-w-full shrink-0 flex-nowrap gap-20 py-4"
        style={{ x: xTranslation }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <motion.li
            key={idx}
            className="max-w-full overflow-hidden rounded-lg"
            whileHover={{ scale: 0.95 }}
            onHoverStart={() => {
              setMustFinish(true)
              setDuration(slowDuration)
            }}
            onHoverEnd={() => {
              setMustFinish(true)
              setDuration(fastDuration)
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
