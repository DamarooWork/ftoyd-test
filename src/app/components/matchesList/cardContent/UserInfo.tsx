import Image from 'next/image'
import StatInfo from './StatInfo'
import { Player } from '@/app/models/api.matches'

export default function UserInfo({ player }: { player: Player }) {
  return (
    <section className=" min-h-[52px] flex flex-wrap  justify-center items-center rounded-sm bg-[#101318] px-1 sm:px-6 py-2 gap-4 ">
      <section className="flex items-center gap-2 ">
        <Image
          src={'/icons/userLogoBase.png'}
          alt={'Base User Logo'}
          width={36}
          height={36}
        />
        <p className="font-semibold leading-6 text-nowrap text-center text-ellipsis overflow-hidden whitespace-nowrap">
          {player.username}
        </p>
      </section>
      <StatInfo title={'Убийств'} stat={player.kills} />
    </section>
  )
}
