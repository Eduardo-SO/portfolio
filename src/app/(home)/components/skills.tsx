import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'

interface SkillsProps {
  className?: string
}

const skillsContent = [
  {
    id: 1,
    title: 'Lorem ipsum, dolor sit amet.',
    content:
      'Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt',
  },
  {
    id: 2,
    title: 'Lorem ipsum, dolor sit amet.',
    content:
      'Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt',
  },
  {
    id: 3,
    title: 'Lorem ipsum, dolor sit amet.',
    content:
      'Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt',
  },
  {
    id: 4,
    title: 'Lorem ipsum, dolor sit amet.',
    content:
      'Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt',
  },
  {
    id: 5,
    title: 'Lorem ipsum, dolor sit amet.',
    content:
      'Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt. Consectetur adipisicing elit. Illum, nesciunt',
  },
]

export function Skills({ className }: SkillsProps) {
  const ref = useRef(null)

  const isInView = useInView(ref)

  return (
    <div
      ref={ref}
      className={cn(
        className,
        'grid h-min w-full max-w-7xl grid-cols-1 sm:grid-cols-2',
      )}
    >
      <motion.div
        className="top-40 flex h-min flex-col items-start gap-10 sm:sticky"
        initial={{
          y: -120,
          opacity: 0,
        }}
        animate={
          isInView && {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }
        }
      >
        <span className="rounded-full  border border-slate-600 px-4 py-2 font-bold text-muted-foreground">
          Skills & Expertise
        </span>
        <span className="text-5xl font-bold leading-tight">
          My Skills that Shine, Expertise You Can Trust
        </span>
        <Button
          className="hidden rounded-full sm:block"
          variant="secondary"
          size="lg"
        >
          Mais sobre mim
        </Button>
      </motion.div>

      <motion.div
        className="flex flex-col gap-10"
        initial={{
          y: -120,
          opacity: 0,
        }}
        animate={
          isInView && {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }
        }
      >
        {skillsContent.map((skill) => (
          <div
            key={skill.id}
            className="sticky top-40 flex gap-6 rounded-xl border border-slate-800 bg-gradient-to-t from-slate-900 to-black p-6"
          >
            <span className="text-xl font-bold">0{skill.id}</span>
            <div className="flex flex-col gap-4">
              <span className="text-lg font-bold">{skill.title}</span>
              <p className="text-muted-foreground">{skill.content}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
