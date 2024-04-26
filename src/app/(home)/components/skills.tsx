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
    title: 'Tecnologias Web',
    content:
      'Sou apaixonado por explorar e implementar tecnologias web modernas que impulsionam a inovação e a eficiência. Com um olhar atento às tendências emergentes, me dedico a utilizar frameworks e ferramentas de ponta para criar experiências digitais avançadas e interativas.',
  },
  {
    id: 2,
    title: 'Design de UI/UX',
    content:
      'Minha paixão é projetar interfaces de usuário e experiências de usuário que não apenas pareçam esteticamente agradáveis, mas que também sejam intuitivas e fáceis de usar. Priorizo a criação de soluções de design que atendam às necessidades dos usuários enquanto impulsionam a usabilidade e a satisfação.',
  },
  {
    id: 3,
    title: 'Design de Websites',
    content:
      'Estou comprometido em criar designs de websites que capturam a essência de uma marca e engajam os visitantes. Combinando estética com funcionalidade, asseguro que cada site que desenvolvo seja responsivo, acessível e otimizado para uma ótima performance.',
  },
  {
    id: 4,
    title: 'Organização do Código',
    content:
      'Acredito firmemente que uma base de código bem organizada é a chave para o desenvolvimento eficiente e a manutenção a longo prazo. Me esforço para escrever código limpo, documentado e modular, facilitando a colaboração e a escalabilidade dos projetos.',
  },
  {
    id: 5,
    title: 'Atenção aos Detalhes',
    content:
      'Detalhes fazem a diferença. É por isso que dedico uma atenção meticulosa a cada aspecto do processo de design e desenvolvimento. Desde a escolha da paleta de cores até a otimização do desempenho, cada detalhe é considerado para garantir a excelência do produto final.',
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
            className="sticky top-40 flex gap-6 rounded-xl border border-zinc-900 bg-gradient-to-t from-zinc-950 to-black p-6"
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
