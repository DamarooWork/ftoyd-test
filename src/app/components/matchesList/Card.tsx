import Image from 'next/image'
import CardStatus from './CardStatus'
import { useEffect, useRef, useState } from 'react'
import CardContent from './cardContent'
import gsap from 'gsap'
import useDeviceSize from '@/lib/hooks/useDeviceSize'
import { Match } from '@/app/models/api.matches'

export default function Card({ match }: { match: Match }) {
  const [width] = useDeviceSize()
  const [isOpen, setIsOpen] = useState(false)
  const cardContentRef = useRef<HTMLElement>(null)
  const scoreRef = useRef<HTMLSpanElement>(null)
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
  useEffect(() => {
    const tlScore = gsap.timeline({})
    tlScore.fromTo(
      scoreRef.current,
      { scale: 1, opacity: 0 },
      { scale: 1.2, duration: 0.3, opacity: 1 }
    )
    tlScore.fromTo(
      scoreRef.current,
      { scale: 1.2 },
      { scale: 1, ease: 'expo.inOut', duration: 0.5 },
      '>+0.3'
    )
  }, [match.homeScore, match.awayScore])

  return (
    <section
      onClick={handleCardClick}
      className="flex flex-col justify-center items-center  bg-[#0B0E12] rounded-sm min-w-full cursor-pointer"
    >
      <section className="flex max-lg:flex-col max-lg:gap-4 gap-2 items-center w-full   p-4">
        <section className="flex justify-between items-center w-full">
          <section className="flex items-center gap-2">
            <Image
              className=" max-sm:w-7 max-sm:h-7 w-12 h-auto max-w-none"
              src="/icons/teamLogoBase.png"
              alt={'Team logo'}
              width={48}
              height={48}
            />
            <h3 className="text-nowrap">{match.homeTeam.name}</h3>
          </section>
          <section className="flex flex-col items-center gap-2">
            <span ref={scoreRef} className="text-xl will-change-transform">
              {match.homeScore} : {match.awayScore}
            </span>
            <CardStatus status={match.status} />
          </section>
          <section className="flex items-center gap-2">
            <h3 className="text-nowrap">{match.awayTeam.name}</h3>
            <Image
              className=" max-sm:w-7 max-sm:h-7  "
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
            } transition-all duration-300 ease-out h-[7px] w-[14px]`}
            src={'/icons/cardOpenIcon.png'}
            alt={'cardOpenIcon'}
            width={14}
            height={7}
          />
        )}
      </section>

      <section
        ref={cardContentRef}
        className="hidden max-lg:flex-col justify-center items-center gap-4 lg:gap-8 min-h-[136px] max-lg:p-4 p-7 w-full"
      >
        <CardContent homeTeam={match.homeTeam} awayTeam={match.awayTeam} />
      </section>
      {width < 1024 && isOpen && (
        <div className="w-full flex justify-center py-4 cursor-pointer">
          <Image
            className={`rotate-180 transition-all duration-300 ease-out h-[7px] w-[14px]`}
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
