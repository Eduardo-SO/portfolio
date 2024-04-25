import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { CalendarDays, Github, Linkedin } from 'lucide-react'
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
    <div className="flex w-full max-w-7xl flex-col items-center gap-4 py-10 text-center text-sm text-muted-foreground sm:grid sm:grid-cols-3">
      <div className="flex items-baseline justify-self-start text-nowrap">
        <div>Desenvolvido por </div>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button className="mx-1 p-0 text-white" variant="link">
              Eduardo Souza
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/eduardo-so.png" />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@eduardo-so</h4>
                <p className="text-sm">
                  Front End Developer - React | Typescript | Tailwind
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                  <div className="text-xs text-muted-foreground">
                    Joined August 18, 2019
                  </div>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
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
