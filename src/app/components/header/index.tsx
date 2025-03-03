import localFont from 'next/font/local'
import ReloadBtn from './ReloadBtn'
import ErrorNotification from './ErrorNotification'
import DropListBtn from './DropListBtn'
const myFont = localFont({
  src: '../../../../public/fonts/TacticSansItalic/TacticSans-UltIt.woff2',
  display: 'swap',
})
export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between  items-center gap-4">
      <hgroup className="flex flex-col lg:flex-row max-lg:justify-center justify-start items-center  gap-4 max-md:w-full">
        <h1
          className={`${myFont.className} italic text-[32px] leading-[32px] text-nowrap`}
        >
          Match Tracker
        </h1>
        <DropListBtn />
      </hgroup>
      <section className="flex flex-wrap justify-end max-md:justify-center items-center gap-3 max-sm:w-full">
        <ErrorNotification />
        <ReloadBtn />
      </section>
    </header>
  )
}
