export interface IMatch {
  id: number
  time: string
  title: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  status: CardStatusType
  homeTeamAndPlayersStat: TeamAndPlayersStat
  awayTeamAndPlayersStat: TeamAndPlayersStat
}
export type CardStatusType = 'Scheduled' | 'Ongoing' | 'Finished'

export interface TeamAndPlayersStat {
  Players: Player[]
  TeamStat: TeamStat[]
}

export interface Player {
  Nickname: string
  stat: Stat
}

export interface Stat {
  title: string
  value: number
}

export interface TeamStat {
  title: string
  value: string
}
