'use client'
import { useGetMatchesQuery } from '@/store/matches/matches.api'
import _matches from '@/lib/data/teamsForTest.json'
import Card, { ICardProps } from './Card'
import Loader from '@/ui/Loader'
export default function MatchesList() {
  // api запрос через CreateApi redux'a const { isLoading, isError, data } = useGetMatchesQuery()
  const { isLoading } = useGetMatchesQuery()
  const matches = _matches as ICardProps[]
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
