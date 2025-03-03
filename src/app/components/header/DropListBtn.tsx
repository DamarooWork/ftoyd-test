'use client'
import { changeFilter } from '@/store/matches/filterSlice'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { CardStatusType } from '../matchesList/CardStatus'
import { useDispatch } from 'react-redux'
interface IDropItem {
  id: number
  value: string
  disabled: boolean
}
const DropItems: IDropItem[] = [
  { id: 0, value: 'Все статусы', disabled: false },
  { id: 1, value: 'Live', disabled: false },
  { id: 2, value: 'Finished', disabled: false },
  { id: 3, value: 'Match preparing', disabled: false },
]
export default function DropListBtn() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState(DropItems[0].value)
  const DropListBtnRef = useRef<HTMLElement>(null)
  const dispatch = useDispatch()
  useClickAway(DropListBtnRef, () => {
    setIsOpen(false)
  })
  const handleDropItemClick = (item: IDropItem) => {
    switch (item.value) {
      case 'Live':
        dispatch(changeFilter('Ongoing'))
        break
      case 'Match preparing':
        dispatch(changeFilter('Scheduled'))
        break
      default:
        dispatch(changeFilter(item.value as CardStatusType | 'Все статусы'))
    }
    setStatus(item.value)
    setIsOpen(false)
  }
  return (
    <section
      ref={DropListBtnRef}
      className="relative w-full sm:min-w-[170px] h-[56px] "
    >
      <button
        className="relative flex w-full  h-[56px]  items-center gap-3 cursor-pointer transition-colors duration-300 ease-out  rounded-sm py-[10px] pl-5 pr-10 bg-[#0B0E12] text-[#B4B5B6] hover:text-white hover:bg-[#0F1318] active:border-[#171D25] border-[1px] border-[#0B0E12] active:bg-[#0B0E12] box-border overflow-hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-nowrap">{status}</span>
        <Image
          className={`${
            isOpen && 'rotate-180'
          } transition-all duration-300 ease-out absolute top-1/2 right-5 -translate-y-1/2`}
          src={'/icons/dropListOpenIcon.png'}
          alt={'Open list icon'}
          width={12}
          height={6}
        />
      </button>
      {isOpen && (
        <section className="absolute top-[65px] left-0 w-full flex flex-col justify-center  items-start py-1  bg-[#0F1318]  z-50 rounded-sm shadow-[0px_2px_4px_0px_#0D101359]">
          {DropItems.map((item) => (
            <button
              onClick={() => handleDropItemClick(item)}
              className="cursor-pointer py-2 px-5 w-full text-[#B4B5B6] hover:text-white hover:bg-[#11161D] rounded-sm active:bg-[#0D1115] disabled:bg-[#0F1318] disabled:text-[#68696A]"
              key={item.id}
              disabled={item.disabled}
            >
              {item.value}
            </button>
          ))}
        </section>
      )}
    </section>
  )
}
