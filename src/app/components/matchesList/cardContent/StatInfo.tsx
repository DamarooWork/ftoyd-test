
export default function TeamStat({ stat, title }: { stat: number, title: string }) {
  return (
    <section className="flex justify-center items-center gap-2 ">
      <span className="text-[14px] font-medium opacity-40">{title}</span>
      <span className=" font-semibold leading-6">{stat}</span>
    </section>
  )
}
