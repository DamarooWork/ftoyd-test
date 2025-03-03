import { Stat } from '@/app/models/testAPI'

export default function TeamStat({ stat }: { stat: Stat }) {
  return (
    <section className="flex justify-center items-center gap-2 ">
      <span className="text-[14px] font-medium opacity-40">{stat.title}</span>
      <span className=" font-semibold leading-6">{stat.value}</span>
    </section>
  )
}
