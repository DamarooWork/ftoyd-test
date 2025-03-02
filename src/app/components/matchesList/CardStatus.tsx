export type CardStatusType = 'Scheduled' | 'Ongoing' | 'Finished'

export default function CardStatus({ status }: { status: CardStatusType }) {
  switch (status) {
    case 'Scheduled':
      return (
        <section className="min-h-[27px] min-w-[92px] flex justify-center items-center px-1 py-2 rounded-sm bg-[#43AD28]">
          <span className="text-[12px] font-semibold">Live</span>
        </section>
      )
    case 'Ongoing':
      return (
        <section className="fmin-h-[27px] min-w-[92px] flex justify-center items-center px-1 py-2 rounded-sm bg-[#EB0237]">
          <span className="text-[12px] font-semibold">Finished</span>
        </section>
      )
    case 'Finished':
      return (
        <section className="min-h-[27px] min-w-[112px] flex justify-center items-center px-1 py-2 rounded-sm bg-[#EB6402]">
          <span className="text-[12px] font-semibold">Match preparing</span>
        </section>
      )
  }
}
