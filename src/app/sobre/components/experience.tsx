export const Experience = () => {
  const experiences = [
    {
      date: 'Ago de 2021 - O momento',
      title: 'Fidelizza Mais',
      position: 'Desenvolvedor Front End - React',
      description:
        'Tenho mais de três anos de experiência na Fidelizza+, onde desenvolvo e mantenho aplicações de grande porte. Durante minha trajetória na empresa, introduzi tecnologias inovadoras, como Next.js, Tailwind CSS, Vite, Zod, Styled Components e TypeScript, que não eram previamente utilizadas. Estou constantemente em busca de inovação e melhoria contínua dos projetos. Desenvolvi soluções completamente dinâmicas com configurações fornecidas inteiramente pelo backend. Além disso, criei componentes personalizados para atender a casos de uso específicos e implementei integrações com plataformas de terceiros. Minha atuação abrange todo o ciclo de desenvolvimento das aplicações, desde o design até a codificação.',
    },
    {
      date: 'Fev de 2021 - Ago de 2021',
      title: 'Agência Market Media',
      position: 'Desenvolvedor Front End - React',
      description:
        'Na Agência Market Media, apliquei meus conhecimentos em React em um ambiente profissional. Lá, tive a oportunidade de desenvolver e manter componentes React, realizar conexões com APIs utilizando Axios, e aprimorar a experiência do código e a documentação com TypeScript. Também contribuí significativamente para melhorias na interface e experiência do usuário, garantindo um produto final mais eficiente e agradável para os clientes.',
    },
    {
      date: 'Jan de 2018 - Fev de 2021',
      title: 'Soluções Mix',
      position: 'Desenvolvedor Front End - Wordpress, HTML, CSS',
      description:
        'Fui indicado para a Soluções Mix por um professor do Senac, onde concluí um curso técnico em informática. Na época, meus conhecimentos se limitavam a HTML, CSS e WordPress. Durante minha permanência na empresa, desenvolvi e mantive sites institucionais para diversas empresas de pequeno e médio porte. Este trabalho me permitiu aprimorar minhas habilidades e adquirir uma sólida experiência no desenvolvimento web, focando na criação de soluções eficazes e funcionais para os clientes.',
    },
  ]

  return (
    <div className="mb-16">
      <h1 className="mb-3 text-4xl font-bold">Experiência</h1>
      <p className="mb-8 text-muted-foreground">
        Empresas onde pude aplicar meus conhecimentos durante minha carreira
      </p>
      <div className="flex flex-col gap-8 divide-y">
        {experiences.map((experience, index) => (
          <div key={index} className="grid gap-8 pt-8 lg:grid-cols-2 lg:gap-0">
            <p className="font-semibold text-gray-400">{experience.date}</p>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{experience.title}</h2>
              <h3 className="pb-8 text-sm text-muted-foreground">
                {experience.position}
              </h3>
              <p className="text-muted-foreground">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
