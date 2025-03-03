import StatInfo from './StatInfo'
import UserInfo from './UserInfo'

export default function TeamInfo() {
  return (
    <section className="flex flex-col gap-2">
      <section className="flex gap-2">
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </section>
      <section className="h-[52px] flex justify-around gap-2 rounded-sm bg-[#101318] px-10 py-4">
        <StatInfo />
        <span className="text-[#141A21]">|</span>

        <StatInfo />
        <span className="text-[#141A21]">|</span>
        <StatInfo />
      </section>
    </section>
  )
}
