import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutProvider from '@/contexts/layout-context'
import Transitions, { Animate } from '@/components/transitions'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'

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
        <body className={inter.className}>
          <Transitions className="max-w-screen relative flex h-screen flex-col">
            <Header />
            <Animate className="flex-1">
              {children}
              <Footer />
            </Animate>
          </Transitions>
        </body>
      </LayoutProvider>
    </html>
  )
}
