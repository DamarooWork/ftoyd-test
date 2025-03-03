import useDeviceSize from '@/lib/hooks/useDeviceSize'
import TeamInfo from './TeamInfo'
import { Team } from '@/app/models/api.matches'

export default function CardContent({
  homeTeam,
  awayTeam,
}: {
  homeTeam: Team
  awayTeam: Team
}) {
  const [width] = useDeviceSize()
  return (
    <>
      <TeamInfo team={homeTeam} />
      {width < 1024 && (
        <section className="relative text-[#313A47] flex justify-center items-center min-w-full gap-2">
          <div className="flex-1/2 min-h-[1px] bg-[#13181F] "></div>

          <span className="px-2">VS</span>
          <div className="flex-1/2 min-h-[1px] bg-[#13181F] "></div>
        </section>
      )}
      <TeamInfo team={awayTeam} />
    </>
  )
}
