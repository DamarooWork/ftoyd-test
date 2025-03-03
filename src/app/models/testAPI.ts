import { CardStatusType } from "./api.matches"

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


export interface TeamAndPlayersStat {
  Players: Player[]
  TeamStat: Stat[]
}

export interface Player {
  nickname: string
  stat: Stat
}

export interface Stat {
  title: string
  value: number | string
}


