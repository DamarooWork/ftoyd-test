import Image from 'next/image'
import StatInfo from './StatInfo'

export default function UserInfo() {
  return (
    <section className="min-h-[52px]    flex flex-wrap  justify-center items-center  rounded-sm bg-[#101318] px-6 py-2 gap-4 ">
      <section className="flex items-center  gap-2  float-left">
        <Image
          src={'/icons/userLogoBase.png'}
          alt={'Base User Logo'}
          width={36}
          height={36}
        />
        <p className="font-semibold leading-6 text-nowrap text-center">
          User 1
        </p>
      </section>
      <StatInfo />
    </section>
  )
}
