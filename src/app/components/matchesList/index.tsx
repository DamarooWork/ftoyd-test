'use client'
import { useGetMatchesQuery } from '@/store/matches/matches.api'
import _matches from '@/lib/data/teamsForTest.json'
import Card from './Card'
import Loader from '@/ui/Loader'
import { useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'
import { Match } from '@/app/models/api.matches'
export default function MatchesList() {
  const { isLoading, isError, data } = useGetMatchesQuery()
  const { filter } = useAppSelector((state) => state.filter)
  const [filteredMatches, setFilteredMatches] = useState([] as Match[])
  useEffect(() => {
    switch (filter) {
      case 'Все статусы':
        setFilteredMatches([] as Match[])
        break
      default:
        setFilteredMatches(
          data?.data.matches.filter(
            (match) => match.status === filter
          ) as Match[]
        )
    }
  }, [filter])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <section>
          <p>Ошибка</p>
        </section>
      ) : filteredMatches.length !== 0 ? (
        <ul className="flex flex-col gap-4 mt-5">
          {filteredMatches.map((match) => (
            <Card key={match.time} match={match} />
          ))}
        </ul>
      ) : data && data?.data.matches.length !== 0 ? (
        <ul className="flex flex-col gap-4 mt-5">
          {data?.data.matches.map((match) => (
            <Card key={match.time} match={match} />
          ))}
        </ul>
      ) : (
        <section>
          <p>Нет матчей</p>
        </section>
      )}
    </>
  )
}
