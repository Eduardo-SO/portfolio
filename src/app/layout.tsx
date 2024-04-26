import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutProvider from '@/contexts/layout-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eduardo Souza',
  description:
    'Portfólio desenvolvido com Next.js, TailwindCSS e Framer Motion.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <title>Eduardo Souza</title>

      <LayoutProvider>
        <body className={inter.className}>{children}</body>
      </LayoutProvider>
    </html>
  )
}
