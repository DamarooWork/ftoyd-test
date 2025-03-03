import { CardStatusType } from "@/app/models/testAPI"


export default function CardStatus({ status }: { status: CardStatusType }) {
  const CardStatusClasses = `min-h-[27px] max-[400px]:min-w-[50px] max-[640px]:min-w-[70px] min-w-[92px] flex justify-center items-center px-1 py-2 rounded-sm `
  const CardStatusTextClasses = `max-sm:text-[10px] text-[12px] font-semibold text-center`
  switch (status) {
    case 'Ongoing':
      return (
        <section className={`${CardStatusClasses}  bg-[#43AD28]`}>
          <span className={CardStatusTextClasses}>Live</span>
        </section>
      )
    case 'Finished':
      return (
        <section className={`${CardStatusClasses} bg-[#EB0237]`}>
          <span className={CardStatusTextClasses}>Finished</span>
        </section>
      )
    case 'Scheduled':
      return (
        <section className={`${CardStatusClasses} bg-[#EB6402]`}>
          <span className={CardStatusTextClasses}>Match preparing</span>
        </section>
      )
  }
}
