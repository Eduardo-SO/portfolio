import Image from 'next/image'

export const AboutMe = () => {
  return (
    <div className="mb-16">
      <div className="mb-10 text-center text-4xl font-semibold sm:text-5xl md:text-6xl">
        Sobre Eduardo Souza
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <Image
          src="/perfil.jpg"
          alt="Perfil image"
          width={500}
          height={500}
          className="mb-6 w-full max-w-sm rounded-3xl object-cover"
        />
        <p className="max-w-2xl font-medium  text-muted-foreground lg:w-3/5 lg:max-w-full">
          Com mais de 6 anos de experiência no desenvolvimento de software,
          sendo mais de 3 anos focados em React, trago uma sólida base de
          conhecimento para criar soluções inovadoras e eficientes. Além disso,
          minha paixão pelo design me proporciona uma visão única para criar
          interfaces intuitivas e atraentes.
          <br />
          <br />
          Destaco minha capacidade de criar aplicações interativas e intuitivas
          que atendem às necessidades dos usuários. Tive o privilégio de
          trabalhar tanto na manutenção quanto no desenvolvimento de novas
          funcionalidades para aplicações utilizadas por grandes empresas, o que
          me proporcionou uma compreensão profunda dos desafios e exigências do
          mercado corporativo.
          <br />
          <br />
          Estou sempre em busca das melhores práticas e tecnologias para
          aprimorar meu trabalho. Meu entusiasmo pela inovação e minha constante
          busca por conhecimento me mantêm atualizado com as últimas tendências
          e avanços no desenvolvimento web.
        </p>
      </div>
    </div>
  )
}
