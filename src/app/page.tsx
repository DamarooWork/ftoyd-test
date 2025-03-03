'use client'
import useSocketConnectAPI from '@/lib/hooks/useSocketConnectAPI'
import MatchesList from './components/matchesList'

export default function Home() {
  useSocketConnectAPI()
  return (
    <>
      <MatchesList />
    </>
  )
}
