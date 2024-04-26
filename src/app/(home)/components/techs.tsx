import { motion } from 'framer-motion'
import Image from 'next/image'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

const techsUrls = [
  '/techs/chat-gpt.png',
  '/techs/css.png',
  '/techs/figma.png',
  '/techs/framer.png',
  '/techs/git.png',
  '/techs/github.png',
  '/techs/html.png',
  '/techs/monday.png',
  '/techs/next.png',
  '/techs/react.png',
  '/techs/shadcn.png',
  '/techs/tailwind.png',
  '/techs/typescript.png',
  '/techs/zod.png',
]

const mappedImages = techsUrls.map((techUrl, index) => (
  <Image
    key={index}
    className="rounded-md"
    width={36}
    height={36}
    alt=""
    src={techUrl}
  />
))

export function Techs() {
  return (
    <motion.div
      className="mb-20"
      initial={{
        y: 120,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1.2,
        },
      }}
    >
      <InfiniteMovingCards items={mappedImages} />
    </motion.div>
  )
}
