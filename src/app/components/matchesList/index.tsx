'use client'
import { useGetMatchesQuery } from '@/store/matches/matches.api'
import Card from './Card'
import Loader from '@/ui/Loader'
import { useAppSelector } from '@/store/hooks'
import { useEffect, useMemo, useState } from 'react'
import { Match } from '@/app/models/api.matches'
import useSocketConnectAPI from '@/lib/hooks/useSocketConnectAPI'

export default function MatchesList() {
  const { isLoading, isError, isFetching, data } = useGetMatchesQuery()
  const { filter } = useAppSelector((state) => state.filter)
  const [matches, setMatches] = useState<Match[]>([])

  const filteredMatches = useMemo(() => {
    if (filter === 'Все статусы') {
      return matches
    }

    return matches.filter(({ status }) => status === filter)
  }, [filter, matches])

  useEffect(() => {
    setMatches(data?.data.matches || [])
  }, [data?.data.matches])

  const handleMessage = (matches: Match[]) => {
    setMatches(matches)
  }
  const handleError = (e: Event) => {
    console.log('Ошибка подключения к WebSockets', e)
  }

  useSocketConnectAPI({ onMessage: handleMessage, onError: handleError })
  if (isLoading || isFetching) return <Loader />
  if (isError)
    return (
      <section className="flex justify-center">
        <p>Ошибка</p>
      </section>
    )

  return (
    <>
      {filteredMatches.length !== 0 ? (
        <ul className="flex flex-col gap-4 mt-5">
          {filteredMatches.map((match) => (
            <Card key={match.time} match={match} />
          ))}
        </ul>
      ) : (
        <section className="flex justify-center">
          <p>Нет матчей</p>
        </section>
      )}
    </>
  )
}
