import { cn } from '@/lib/utils'
import { Variants, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  primaryBackground: string
  secondaryBackground?: string
  link: string
}

const variants: Record<string, Variants> = {
  overlay: {
    rest: {
      filter: 'brightness(50%)',
      scale: 1,
    },
    hover: {
      scale: 1.02,
      filter: 'brightness(20%)',
    },
  },
  imgContainer: {
    hover: { filter: 'opacity(0)' },
  },
  text: {
    rest: { filter: 'opacity(1)' },
    hover: { filter: 'opacity(0)' },
  },
  button: {
    rest: {
      filter: 'opacity(0) blur(5px)',
      padding: '8px 8px 8px 8px',
    },
    hover: {
      filter: 'opacity(1) blur(0px)',
      padding: '8px 8px 8px 124px',
      transition: {
        delay: 0.1,
        bounce: 0,
      },
    },
  },
  buttonText: {},
  arrow: {
    rest: { opacity: 0, rotate: -180 },
    hover: {
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 0.2,
      },
    },
  },
}

export function ProjectCard({
  title,
  description,
  primaryBackground,
  secondaryBackground,
  link,
}: ProjectCardProps) {
  return (
    <a href={link} target="_blank">
      <div className="flex cursor-pointer flex-col gap-4">
        <motion.div
          className="z-20 flex flex-col md:hidden"
          variants={variants.text}
        >
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-sm font-semibold text-zinc-500">{description}</p>
        </motion.div>

        <motion.div
          className="relative flex aspect-video max-h-[400px] items-end overflow-hidden rounded-xl border border-zinc-900 p-6"
          initial="rest"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0"
            variants={variants.overlay}
            transition={{
              ease: 'easeIn',
              duration: 0.4,
            }}
          >
            <motion.div
              variants={secondaryBackground ? variants.imgContainer : {}}
              className={cn(
                'absolute z-10 flex h-full w-full items-end justify-center',
              )}
            >
              <div className="relative h-full w-full">
                <Image
                  src={primaryBackground}
                  alt=""
                  fill
                  className="bg-black object-cover object-[50%_25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80" />
              </div>
            </motion.div>

            {secondaryBackground && (
              <Image
                unoptimized
                src={secondaryBackground}
                className="object-cover"
                alt=""
                fill
              />
            )}
          </motion.div>

          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.button
              variants={variants.button}
              className="relative flex items-center justify-start gap-8 overflow-hidden rounded-full bg-foreground/10 font-semibold text-white backdrop-blur-sm"
            >
              <motion.div
                variants={variants.buttonText}
                className="absolute left-4 whitespace-nowrap"
              >
                Ver detalhes
              </motion.div>

              <motion.div
                className="inline-block rounded-full bg-secondary-foreground p-2 text-secondary"
                variants={variants.arrow}
              >
                <ArrowRight size={24} />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            className="z-20 hidden flex-col md:flex"
            variants={variants.text}
          >
            <p className="text-xl font-semibold">{title}</p>
            <p className="font-semibold text-muted-foreground">{description}</p>
          </motion.div>
        </motion.div>
      </div>
    </a>
  )
}
