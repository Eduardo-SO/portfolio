import { Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const myInterval = setInterval(() => {
      const date = new Date()
      const hour = date.getHours()
      const min = date.getMinutes()
      const second = date.getSeconds()

      setTime(`${hour}:${min}:${second}`)
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }
  }, [])

  return (
    <div className="flex w-full max-w-8xl flex-col items-center gap-4 py-10 text-center text-sm text-muted-foreground sm:grid sm:grid-cols-3">
      <div className="flex items-baseline justify-self-start text-nowrap">
        <div>
          Desenvolvido por <span className="text-white">Eduardo Souza</span>
        </div>
      </div>

      <div className="justify-self-center">{time}</div>

      <div className="flex items-center gap-4 justify-self-end">
        <a
          href="https://github.com/Eduardo-SO"
          target="_blank"
          className="hover:text-white"
        >
          <Github />
        </a>

        <a
          href="https://www.linkedin.com/in/eduardo-so"
          target="_blank"
          className="hover:text-white"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  )
}
