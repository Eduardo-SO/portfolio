import Image from 'next/image'
import { Contact } from '@/components/ui/contact'

export default function Sobre() {
  return (
    <main className="mt-36 flex min-h-screen flex-col items-center bg-background px-4">
      <div className="mb-6 max-w-sm overflow-hidden rounded bg-white p-6 shadow-lg">
        <Image
          src="/perfil.jpg"
          alt="Perfil image"
          width={400}
          height={400}
          className="mt-(-3rem) mx-auto -mt-12 w-32 rounded-full border-2 border-solid border-white"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Sobre Daniel Bennett</div>
          <p className="text-base text-gray-700">
            Conheça Daniel Bennett, a mente criativa por trás dos designs...
            {/* Truncar ou expandir conforme necessário */}
          </p>
        </div>
      </div>

      <Contact />
    </main>
  )
}
