import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Mensagem de {name}!</h1>
    <h2 className="font-bold">{email}</h2>
    <p>{message}</p>
  </div>
)

export default EmailTemplate
