import localFont from 'next/font/local'
import ReloadBtn from './ReloadBtn'
import ErrorNotification from './ErrorNotification'
import DropListBtn from './DropListBtn'
const myFont = localFont({
  src: '../../../../public/fonts/TacticSansItalic/TacticSans-RegIt.woff2',
  display: 'swap',
})
export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <hgroup className="flex justify-center items-center flex-wrap gap-4">
        <h1
          className={`${myFont.className} italic text-[32px] leading-[32px] font-bold `}
        >
          Match Tracker
        </h1>
        <DropListBtn />
      </hgroup>
      <section className="flex items-center gap-3">
        <ErrorNotification />
        <ReloadBtn />
      </section>
    </header>
  )
}
