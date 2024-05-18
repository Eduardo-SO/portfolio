'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export const Tools = () => {
  const tools = [
    {
      title: 'TypeScript',
      icon: '/techs/typescript.png',
      description:
        'Superset do JavaScript que adiciona tipagem estática opcional.',
    },
    {
      title: 'React',
      icon: '/techs/react.png',
      description:
        'Biblioteca JS para construção de interfaces de usuário baseadas em componentes.',
    },
    {
      title: 'Next',
      icon: '/techs/next.png',
      description:
        'Framework de React para desenvolvimento de aplicações web com SSR.',
    },
    {
      title: 'Tailwind',
      icon: '/techs/tailwind.png',
      description:
        'Framework CSS utilitário para criação rápida de designs personalizados.',
    },
    {
      title: 'Shadcn',
      icon: '/techs/shadcn.png',
      description: 'Biblioteca de componentes React estilizados com CSS-in-JS.',
    },
    {
      title: 'Framer Motion',
      icon: '/techs/framer.png',
      description:
        'Plataforma para design e prototipagem de interfaces interativas.',
    },
    {
      title: 'Git',
      icon: '/techs/git.png',
      description:
        'Controle de versão para rastreamento de alterações em código-fonte.',
    },
    {
      title: 'GitHub',
      icon: '/techs/github.png',
      description:
        'Hospedagem de código-fonte que usa Git para controle de versão.',
    },
    {
      title: 'Chat GPT',
      icon: '/techs/chat-gpt.png',
      description:
        'Modelo de linguagem da OpenAI projetado para conversação e geração de texto.',
    },
    {
      title: 'Figma',
      icon: '/techs/figma.png',
      description:
        'Ferramenta de design colaborativo para interfaces de usuário e prototipagem.',
    },
    {
      title: 'Monday',
      icon: '/techs/monday.png',
      description: 'Plataforma de gestão de projetos e trabalho colaborativo.',
    },
    {
      title: 'Zod',
      icon: '/techs/zod.png',
      description:
        'Biblioteca para validação de esquemas e dados em TypeScript.',
    },
    {
      title: 'HTML',
      icon: '/techs/html.png',
      description:
        'Linguagem de marcação utilizada para criar e estruturar páginas web.',
    },
    {
      title: 'CSS',
      icon: '/techs/css.png',
      description:
        'Linguagem de estilo usada para descrever a apresentação de documentos HTML.',
    },
  ]

  return (
    <div className="mb-16 w-full">
      <h1 className="mb-3 text-4xl font-bold">Tecnologias e Ferramentas</h1>
      <p className="mb-8 text-muted-foreground">
        Algumas das tecnologias e ferramentas que utilizo ou possuo experiência.
      </p>

      <div className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.01,
            }}
            className="flex h-full w-full cursor-default items-start gap-4 rounded-lg bg-gradient-to-r from-secondary to-secondary/60 p-4 sm:max-w-xs md:max-w-sm lg:max-w-full"
          >
            <Image
              alt=""
              src={tool.icon}
              width={36}
              height={36}
              className="shrink-0 rounded-md"
            />

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{tool.title}</h2>
              <p className="text-sm text-muted-foreground">
                {tool.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
