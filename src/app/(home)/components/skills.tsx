import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
  return (
    <div className={cn(className, 'grid h-min w-full max-w-7xl grid-cols-2')}>
      <div className="sticky top-40 flex h-min flex-col items-start gap-10">
        <span className="rounded-full  border border-slate-600 px-4 py-2 font-bold text-muted-foreground">
          Skills & Expertise
        </span>
        <span className="text-5xl font-bold leading-tight">
          My Skills that Shine, Expertise You Can Trust
        </span>
        <Button className="rounded-full" variant="secondary" size="lg">
          Mais sobre mim
        </Button>
      </div>

      <div className="flex flex-col gap-10">
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
      </div>
    </div>
  )
}
