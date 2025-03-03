import Image from 'next/image'
import CardStatus from './CardStatus'
import { useRef, useState } from 'react'
import CardContent from './cardContent'
import gsap from 'gsap'
import useDeviceSize from '@/lib/hooks/useDeviceSize'
import { IMatch } from '@/app/models/testAPI'


export default function Card({ match }: { match: IMatch }) {
  const [width] = useDeviceSize()
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
        { opacity: 0, display: 'none', duration: 0 }
      )
    }
  }
  return (
    <section
      onClick={handleCardClick}
      className="flex flex-col justify-center items-center  bg-[#0B0E12] rounded-sm min-w-full cursor-pointer"
    >
      <section className="flex max-lg:flex-col max-lg:gap-4 gap-2 items-center w-full   p-4">
        <section className="flex justify-between items-center w-full">
          <section className="flex items-center gap-2">
            <Image
              className=" max-sm:w-7 max-sm:h-7"
              src="/icons/teamLogoBase.png"
              alt={'Team logo'}
              width={48}
              height={48}
            />
            <h3 className="text-nowrap">{match.homeTeam}</h3>
          </section>
          <section className="flex flex-col items-center gap-2">
            <span className="text-xl">
              {match.homeScore} : {match.awayScore}
            </span>
            <CardStatus status={match.status} />
          </section>
          <section className="flex items-center gap-2">
            <h3 className="text-nowrap">{match.awayTeam}</h3>
            <Image
              className=" max-sm:w-7 max-sm:h-7"
              src="/icons/teamLogoBase.png"
              alt={'Team logo'}
              width={48}
              height={48}
            />
          </section>
        </section>
        {(!isOpen || width > 1024) && (
          <Image
            className={`${
              isOpen && 'rotate-180'
            } transition-all duration-300 ease-out`}
            src={'/icons/cardOpenIcon.png'}
            alt={'cardOpenIcon'}
            width={14}
            height={7}
          />
        )}
      </section>

      <section
        ref={cardContentRef}
        className="hidden max-lg:flex-col justify-start items-center gap-4 lg:gap-8 min-h-[136px] max-lg:p-4 p-7 w-full"
      >
        <CardContent homeTeamStat={match.homeTeamStat} awayTeamStat={match.awayTeamStat}  />
      </section>
      {width < 1024 && isOpen && (
        <div className="w-full flex justify-center py-4 cursor-pointer">
          <Image
            className={`rotate-180 transition-all duration-300 ease-out`}
            src={'/icons/cardOpenIcon.png'}
            alt={'cardOpenIcon'}
            width={14}
            height={7}
          />
        </div>
      )}
    </section>
  )
}
