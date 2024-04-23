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
    <div className="grid w-full max-w-7xl grid-cols-3 items-center py-10 text-muted-foreground">
      <span className="justify-self-start">
        Desenvolvido por{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button className="p-0 text-white" variant="link">
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
                  <span className="text-xs text-muted-foreground">
                    Joined August 18, 2019
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{' '}
        | 2024
      </span>

      <span className="justify-self-center">{time}</span>

      <span className="flex items-center gap-4 justify-self-end">
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
      </span>
    </div>
  )
}
