import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import Image from 'next/image'

const techs = [
  <Image key={1} width={42} height={42} alt="" src="/techs/chat-gpt.png" />,
  <Image key={2} width={42} height={42} alt="" src="/techs/css.png" />,
  <Image key={3} width={42} height={42} alt="" src="/techs/figma.png" />,
  <Image key={4} width={42} height={42} alt="" src="/techs/framer.png" />,
  <Image key={5} width={42} height={42} alt="" src="/techs/git.png" />,
  <Image key={6} width={42} height={42} alt="" src="/techs/github.png" />,
  <Image key={7} width={42} height={42} alt="" src="/techs/html.png" />,
  <Image key={8} width={42} height={42} alt="" src="/techs/monday.png" />,
  <Image key={9} width={42} height={42} alt="" src="/techs/next.png" />,
  <Image key={10} width={42} height={42} alt="" src="/techs/react.png" />,
  <Image key={11} width={42} height={42} alt="" src="/techs/shadcn.png" />,
  <Image key={12} width={42} height={42} alt="" src="/techs/tailwind.png" />,
  <Image key={13} width={42} height={42} alt="" src="/techs/typescript.png" />,
  <Image key={14} width={42} height={42} alt="" src="/techs/zod.png" />,
]

export function TechsCarousel() {
  return <InfiniteMovingCards items={techs} />
}
