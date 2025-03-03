'use client'
import { useGetMatchesQuery } from '@/store/matches/matches.api'
import _matches from '@/lib/data/teamsForTest.json'
import Card from './Card'
import Loader from '@/ui/Loader'
import { useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'
import { IMatch } from '@/app/models/testAPI'
export default function MatchesList() {
  // api запрос через CreateApi redux'a const { isLoading, isError, data } = useGetMatchesQuery()
  const { isLoading } = useGetMatchesQuery()
  const { filter } = useAppSelector((state) => state.filter)
  const [matches, setMatches] = useState(_matches as IMatch[])
  useEffect(() => {
    switch (filter) {
      case 'Все статусы':
        setMatches(_matches as IMatch[])
        break
      default:
        setMatches(
          _matches.filter((match) => match.status === filter) as IMatch[]
        )
    }
  }, [filter])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="flex flex-col gap-4 mt-5">
          {matches.map((match) => (
            <Card key={match.id} match={match} />
          ))}
        </ul>
      )}
    </>
  )
}
