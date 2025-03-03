import StatInfo from './StatInfo'
import UserInfo from './UserInfo'
import { Team } from '@/app/models/api.matches'

export default function TeamInfo({ team }: { team: Team }) {
  return (
    <section className="flex flex-col gap-2">
      <section className="flex gap-2">
        {team.players.map((player, i) => (
          <UserInfo key={i} player={player} />
        ))}
      </section>
      <section className="h-[52px] flex justify-around gap-2 rounded-sm bg-[#101318] px-10 py-4">
        <StatInfo title="Points" stat={team.points} />
        <span className="text-[#141A21]">|</span>
        <StatInfo title="Место" stat={team.place} />
        <span className="text-[#141A21]">|</span>
        <StatInfo title="Всего убийств" stat={team.total_kills} />
      </section>
    </section>
  )
}
