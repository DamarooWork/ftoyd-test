import TeamInfo from './TeamInfo'

export default function CardContent() {
  return (
    <section className="flex justify-center items-center gap-8  min-h-[136px] p-3">
      <TeamInfo />
      <TeamInfo />
    </section>
  )
}
