import Image from 'next/image'
import CardStatus, { CardStatusType } from './CardStatus'
import { useRef, useState } from 'react'
import CardContent from './cardContent'
import gsap from 'gsap'

export interface ICardProps {
  id: number
  time: string
  title: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  status: CardStatusType
}
export default function Card({ match }: { match: ICardProps }) {
  const [isOpen, setIsOpen] = useState(false)
  const cardContentRef = useRef<HTMLElement>(null)
  const handleCardClick = () => {
    setIsOpen((prev) => !prev)
    if (!isOpen) {
      gsap.fromTo(
        cardContentRef.current,
        { opacity: 0, display: 'none', yPercent: -5 },
        { opacity: 1, display: 'flex', duration: 0.3, yPercent: 0 }
      )
    } else {
      gsap.fromTo(
        cardContentRef.current,
        { opacity: 1, display: 'flex' },
        { opacity: 0, display: 'none' }
      )
    }
  }
  return (
    <details className="flex flex-col justify-center items-center  bg-[#0B0E12] rounded-sm min-w-full">
      <summary
        onClick={handleCardClick}
        className="flex gap-2 items-center w-full  cursor-pointer p-4"
      >
        <section className="flex justify-between items-center w-full">
          <section className="flex items-center gap-2">
            <Image
              src="/icons/teamLogoBase.png"
              alt={'Team logo'}
              width={48}
              height={48}
            />
            <h3>{match.homeTeam}</h3>
          </section>
          <section className="flex flex-col items-center gap-2">
            <span className="text-xl">
              {match.homeScore} : {match.awayScore}
            </span>
            <CardStatus status={match.status} />
          </section>
          <section className="flex items-center gap-2">
            <h3>{match.awayTeam}</h3>
            <Image
              src="/icons/teamLogoBase.png"
              alt={'Team logo'}
              width={48}
              height={48}
            />
          </section>
        </section>
        <Image
          className={`${
            isOpen && 'rotate-180'
          } transition-all duration-300 ease-out`}
          src={'/icons/cardOpenIcon.png'}
          alt={'cardOpenIcon'}
          width={14}
          height={7}
        />
      </summary>
      <section
        ref={cardContentRef}
        className="hidden justify-start items-center  gap-8 min-h-[136px] p-7 w-full"
      >
        <CardContent />
      </section>
    </details>
  )
}
