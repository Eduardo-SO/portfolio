'use client'

import { Contact } from './components/contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background px-4">
      <Contact />
    </main>
  )
}
