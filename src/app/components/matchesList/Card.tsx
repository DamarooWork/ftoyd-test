import Image from 'next/image'
import CardStatus, { CardStatusType } from './CardStatus'
import { useState } from 'react'
import CardContent from './cardContent'

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
  return (
    <details className="flex flex-col justify-center items-center cursor-pointer bg-[#0B0E12] rounded-sm p-4 ">
      <summary
        className="flex gap-2 items-center w-full "
        onClick={() => setIsOpen((prev) => !prev)}
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
          className={`${isOpen && 'rotate-180'}`}
          src={'/icons/cardOpenIcon.png'}
          alt={'cardOpenIcon'}
          width={14}
          height={7}
        />
      </summary>
      {isOpen && <CardContent />}
    </details>
  )
}
