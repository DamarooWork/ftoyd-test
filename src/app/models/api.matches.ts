export interface MatchesAPI {
  data: Data
  ok: boolean
}

export interface Data {
  matches: Match[]
}

export interface Match {
  awayScore: number
  awayTeam: Team
  homeScore: number
  homeTeam: Team
  status: CardStatusType
  time: string
  title: string
}
export type CardStatusType = 'Scheduled' | 'Ongoing' | 'Finished'
export interface Team {
  name: string
  place: number
  players: Player[]
  points: number
  total_kills: number
}

export interface Player {
  kills: number
  username: string
}
export interface MatchesWs {
  data: Match[]
}


