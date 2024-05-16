import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

interface FormData {
  name: string
  email: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message }: FormData = await request.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['eduardo.sool07@gmail.com'],
      subject: 'Contato do portfólio',
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    })
    if (error) {
      return Response.json({ error }, { status: 500 })
    }
    return Response.json(data)
  } catch (error) {
    // return Response.json({ error }, { status: 500 })
  }
}
