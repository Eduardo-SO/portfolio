import Image from 'next/image'
import { Contact } from '@/components/ui/contact'

export default function Sobre() {
  return (
    <main className="mt-36 flex min-h-screen flex-col items-center bg-background px-4">
      <div className="flex w-full max-w-7xl flex-col items-center gap-6">
        <div className="mb-10 text-4xl font-semibold sm:text-5xl md:text-6xl">
          Sobre Eduardo Souza
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <Image
            src="/perfil.jpg"
            alt="Perfil image"
            width={500}
            height={500}
            className="mb-6 w-full max-w-sm rounded-3xl object-cover"
          />
          <p className="max-w-2xl font-medium text-muted-foreground lg:w-3/5 lg:max-w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            distinctio quos asperiores placeat id voluptatem, magnam
            perspiciatis! Provident deleniti obcaecati, nostrum expedita,
            repudiandae, sint et repellendus tempore hic rerum quasi illum.
            Laborum aspernatur sequi modi eum? Sed quis molestias autem deserunt
            vitae soluta deleniti fugiat sequi quos, voluptate ipsum ea omnis
            rerum eveniet earum numquam odit illum qui beatae adipisci, alias a?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi
            tempora illum quam nihil, optio temporibus repellat necessitatibus
            molestias recusandae vero et ipsa repudiandae enim provident
            laboriosam eum animi nisi rem obcaecati? Nostrum praesentium aut,
            illum dignissimos modi assumenda nulla consequatur earum voluptas
            tenetur beatae sunt et, explicabo ex hic ipsum veritatis natus
            necessitatibus. Cum repudiandae est, hic libero deserunt ad ratione,
            quod cupiditate quaerat, rem sapiente id nostrum ab? Saepe ipsa ab
            repellat eum dicta pariatur amet iure, distinctio quidem? Maiores,
            repudiandae ipsum et sed, enim architecto voluptatum voluptatem nam
            id vero velit a iure aliquam at voluptas delectus minima vel facere!
          </p>
        </div>

        <Contact />
      </div>
    </main>
  )
}
