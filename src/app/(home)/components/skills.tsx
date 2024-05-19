import { FancyButton } from '@/components/ui/fancy-button'
import { cn } from '@/lib/utils'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'

interface SkillsProps {
  className?: string
}

const skillsContent = [
  {
    id: 1,
    title: 'Tecnologias Web Modernas',
    content:
      'Sou fascinado por explorar e implementar tecnologias web modernas que impulsionam a inovação e a eficiência. Com mais de seis anos de experiência, utilizo frameworks e ferramentas de ponta como Next.js, Tailwind CSS e TypeScript para criar experiências digitais avançadas e interativas.',
  },
  {
    id: 2,
    title: 'Design de Websites',
    content:
      'Estou comprometido em criar designs de websites que capturam a essência de uma marca e engajam os visitantes. Combinando estética com funcionalidade, cada site que desenvolvo é responsivo, acessível e otimizado para uma ótima performance.',
  },
  {
    id: 3,
    title: 'Organização do Código',
    content:
      'Acredito firmemente que uma base de código bem organizada é a chave para o desenvolvimento eficiente e a manutenção a longo prazo. Me esforço para escrever código limpo, facilitando a colaboração e a escalabilidade dos projetos.',
  },
  {
    id: 4,
    title: 'Atenção aos Detalhes',
    content:
      'Detalhes fazem a diferença. É por isso que dedico uma atenção meticulosa a cada aspecto do processo de design e desenvolvimento. Desde a escolha de ícones até a otimização do desempenho, cada detalhe é considerado para garantir a excelência do produto final.',
  },
  {
    id: 5,
    title: 'Aprimoramento Contínuo e Melhores Práticas',
    content:
      'Minha busca constante por inovação e conhecimento me mantém atualizado com as últimas tendências e avanços no desenvolvimento web. Adoto as melhores práticas para garantir que minhas soluções sejam eficientes, seguras e alinhadas com os padrões do setor, promovendo melhorias contínuas nos projetos.',
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
        'my-32 grid h-min w-full max-w-8xl grid-cols-1 lg:grid-cols-2',
      )}
    >
      <motion.div
        className="sticky top-24 mb-8 flex h-min flex-col items-start gap-6 lg:top-40 lg:mb-0 lg:gap-10"
        initial={{
          y: -120,
          opacity: 0,
        }}
        animate={
          isInView && {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }
        }
      >
        <span className="self-center rounded-full border border-zinc-900 bg-background px-4 py-2 font-semibold text-muted-foreground lg:relative lg:self-start">
          Skills & Conhecimentos
        </span>
        <span className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          Habilidades que brilham
          <br />
          Conhecimentos em que você pode confiar
        </span>

        <FancyButton className="hidden lg:flex">Mais sobre mim</FancyButton>
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
              duration: 0.6,
              delay: 0.2,
            },
          }
        }
      >
        {skillsContent.map((skill) => (
          <div
            key={skill.id}
            className="sticky top-72 flex gap-6 rounded-xl border border-zinc-900 bg-gradient-to-b from-zinc-950/30 to-black p-8 backdrop-blur-md sm:top-64 lg:top-40"
          >
            <span className="hidden text-xl font-bold sm:flex">
              0{skill.id}
            </span>
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
