import { CardStatusType } from '@/app/models/api.matches'
import { useGetMatchesQuery } from '@/store/matches/matches.api'
export interface IDropItem {
  id: number
  value: string
  disabled: boolean
}
export default function UseGetDropItems() {
  const { data, isLoading, isFetching } = useGetMatchesQuery()
  const isDropItemDisabled = (status: CardStatusType) =>
    data?.data.matches.findIndex((match) => match.status === status) === -1 ||
    isLoading ||
    isFetching

  const DropItems: IDropItem[] = [
    { id: 0, value: 'Все статусы', disabled: isLoading || isFetching },
    {
      id: 1,
      value: 'Live',
      disabled: isDropItemDisabled('Ongoing'),
    },
    {
      id: 2,
      value: 'Finished',
      disabled: isDropItemDisabled('Finished'),
    },
    {
      id: 3,
      value: 'Match preparing',
      disabled: isDropItemDisabled('Scheduled'),
    },
  ]

  return { DropItems }
}
