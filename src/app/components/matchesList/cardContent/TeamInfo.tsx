import { TeamAndPlayersStat } from '@/app/models/testAPI'
import StatInfo from './StatInfo'
import UserInfo from './UserInfo'

export default function TeamInfo({
  teamAndPlayersStat,
}: {
  teamAndPlayersStat: TeamAndPlayersStat
}) {
  return (
    <section className="flex flex-col gap-2">
      <section className="flex gap-2">
        {teamAndPlayersStat.Players.map((player) => (
          <UserInfo key={player.nickname} player={player} />
        ))}
      </section>
      <section className="h-[52px] flex justify-around gap-2 rounded-sm bg-[#101318] px-10 py-4">
        <StatInfo stat={teamAndPlayersStat.TeamStat[0]} />
        <span className="text-[#141A21]">|</span>
        <StatInfo stat={teamAndPlayersStat.TeamStat[1]} />
        <span className="text-[#141A21]">|</span>
        <StatInfo stat={teamAndPlayersStat.TeamStat[2]} />
      </section>
    </section>
  )
}
