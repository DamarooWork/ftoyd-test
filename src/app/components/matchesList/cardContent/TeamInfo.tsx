import StatInfo from './StatInfo'
import UserInfo from './UserInfo'

export default function TeamInfo() {
  return (
    <section className="flex flex-col justify-between items-center gap-2  ">
      <section className="flex justify-center items-center gap-2 ">
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </section>
      <section className="h-[52px] w-full flex justify-around items-center gap-2 rounded-sm bg-[#101318] px-10 py-4">
        <StatInfo />
        <span className="text-[#141A21]">|</span>

        <StatInfo />
        <span className="text-[#141A21]">|</span>
        <StatInfo />
      </section>
    </section>
  )
}
