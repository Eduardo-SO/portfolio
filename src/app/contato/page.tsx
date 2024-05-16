'use client'

import { FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  } as FormData)
  const [isSending, setIsSending] = useState(false)
  const [isAlreadySended, setIsAlreadySended] = useState(false)

  async function handleSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isAlreadySended) {
      return toast.error('Email já enviado', {
        description: 'Obrigado pelo contato!',
        action: {
          label: 'Fechar',
          onClick: () => console.log('Close'),
        },
      })
    }

    setIsSending(true)

    try {
      await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
        headers: {
          Accept: 'application/json',
        },
      })

      toast.success('Email enviado com sucesso', {
        description: 'Obrigado pelo contato!',
        action: {
          label: 'Fechar',
          onClick: () => console.log('Close'),
        },
      })

      setIsAlreadySended(true)
    } catch (error) {
      console.log({ error })
      toast.error('Ocorreu um erro', {
        description:
          'Tente novamente ou entre em contato pelo email eduardo.sool07@gmail.com',
        action: {
          label: 'Ok',
          onClick: () => {
            console.log('Ok')
          },
        },
      })
    }

    setIsSending(false)
  }

  return (
    <main className="flex min-h-[calc(100vh_-_104px)] justify-center px-4 pt-36">
      <div className="flex max-w-3xl flex-col items-center gap-8">
        <h1 className="text-center text-5xl font-bold md:text-5xl">
          Vamos trabalhar juntos
        </h1>

        <p className="text-pretty text-center text-sm text-muted-foreground">
          Adoraria saber mais sobre seus projetos e como posso ajudá-lo.
          Sinta-se à vontade para compartilhar os detalhes dos seus projetos
          usando o formulário abaixo. Se preferir enviar um e-mail, você pode
          entrar em contato comigo pelo e-mail{' '}
          <a
            href="mailto:eduardo.sool07@gmail.com"
            className="text-white underline"
          >
            eduardo.sool07@gmail.com
          </a>
          .
        </p>

        <form
          className="mt-8 flex w-full max-w-4xl flex-col gap-4"
          onSubmit={handleSend}
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              required
              placeholder="Nome"
              className="bg-secondary"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              required
              placeholder="Email"
              type="email"
              className="bg-secondary"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <Textarea
            required
            placeholder="Me fale mais sobre a vaga"
            className="h-[200px] bg-secondary"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <Button type="submit" disabled={isSending}>
            <div className="whitespace-nowrap border-0 bg-gradient-to-r from-zinc-500 to-white bg-clip-text">
              Enviar
            </div>
          </Button>
        </form>
      </div>
    </main>
  )
}
