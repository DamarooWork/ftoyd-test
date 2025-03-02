'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function DropListBtn() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button
      className="relative flex w-[170px] h-[56px] justify-center items-center gap-3 cursor-pointer transition-colors duration-300 ease-out  rounded-sm py-[10px] px-5 bg-[#0B0E12] text-[#B4B5B6] hover:text-white hover:bg-[#0F1318] border-[#171D25] active:border-[1px] active:bg-[#0B0E12] "
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span>Все статусы</span>
      <Image
        className={`${
          isOpen && 'rotate-180'
        } transition-all duration-300 ease-out`}
        src={'/icons/dropListOpenIcon.png'}
        alt={'Open list icon'}
        width={12}
        height={6}
      />
      <section className="absolute top-"></section>
    </button>
  )
}
