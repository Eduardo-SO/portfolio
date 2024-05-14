import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqsContent = [
  {
    id: '1',
    title: 'Qual é a sua experiência em desenvolvimento React?',
    description:
      'Atualmente possuo mais de 6 anos de experiência no desenvolvimento de software, sendo mais de 3 anos focados em React.',
  },
  {
    id: '2',
    title: 'Quais tecnologias foram usadas para construir este site?',
    description:
      'As tecnologias utilizadas na construção deste site envolvem Typescript, NextJS 14, TailwindCSS, Shadcn e Framer Motion',
  },
  {
    id: '3',
    title: 'Você trabalha sozinho ou em time?',
    description:
      'Sou capaz de trabalhar de forma eficaz tanto de forma independente quanto em equipe.',
  },
  {
    id: '4',
    title: 'Você está disponível para contratação?',
    description:
      'Atualmente estou à procura de novas oportunidades de contratação. Entre em contato comigo!',
  },
  {
    id: '5',
    title: 'Posso usar o código deste site como referência?',
    description: (
      <p>
        Claro, fique à vontade, o código da aplicação atualmente está{' '}
        <a
          href="https://github.com/Eduardo-SO/portfolio"
          target="_blank"
          className="text-white underline"
        >
          nesse repositório
        </a>
      </p>
    ),
  },
]

export function FAQs() {
  return (
    <div className="mb-16 flex w-full max-w-3xl flex-col items-center justify-center text-center">
      <span className="mb-12 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
        FAQs
      </span>

      <Accordion type="single" collapsible className="w-full">
        {faqsContent.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>{faq.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
