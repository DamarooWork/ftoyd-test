import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <title>FTOYD Arena - Матчи</title>
          <link rel="icon/png" href="/icon.png" sizes="any" />
        </head>
        <body
          className={`${inter.className} px-4 py-8 sm:px-[42px] sm:py-[53px]`}
        >
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </StoreProvider>
  )
}
