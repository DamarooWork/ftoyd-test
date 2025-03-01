export interface Root {
  openapi: string
  info: Info
  paths: Paths
  components: Components
}

export interface Info {
  title: string
  version: string
  description: string
}

export interface Paths {
  "/fronttemp": Fronttemp
}

export interface Fronttemp {
  get: Get
}

export interface Get {
  tags: string[]
  summary: string
  operationId: string
  responses: Responses
}

export interface Responses {
  "200": N200
}

export interface N200 {
  description: string
  content: Content
}

export interface Content {
  "application/json": ApplicationJson
}

export interface ApplicationJson {
  schema: Schema
}

export interface Schema {
  allOf: AllOf[]
}

export interface AllOf {
  $ref?: string
  properties?: Properties
}

export interface Properties {
  data: Data
}

export interface Data {
  type: string
  properties: Properties2
  required: string[]
}

export interface Properties2 {
  matches: Matches
}

export interface Matches {
  type: string
  items: Items
}

export interface Items {
  $ref: string
}

export interface Components {
  schemas: Schemas
}

export interface Schemas {
  Player: Player
  Team: Team
  MatchStatus: MatchStatus
  Match: Match
  "Successful-Response": SuccessfulResponse
}

export interface Player {
  type: string
  properties: Properties3
  required: string[]
}

export interface Properties3 {
  username: Username
  kills: Kills
}

export interface Username {
  type: string
  description: string
}

export interface Kills {
  type: string
  description: string
}

export interface Team {
  type: string
  properties: Properties4
  required: string[]
}

export interface Properties4 {
  name: Name
  players: Players
  points: Points
  place: Place
  total_kills: TotalKills
}

export interface Name {
  type: string
  description: string
}

export interface Players {
  type: string
  items: Items2
}

export interface Items2 {
  $ref: string
}

export interface Points {
  type: string
  description: string
}

export interface Place {
  type: string
  description: string
}

export interface TotalKills {
  type: string
  description: string
}

export interface MatchStatus {
  type: string
  description: string
  enum: string[]
}

export interface Match {
  type: string
  properties: Properties5
  required: string[]
}

export interface Properties5 {
  time: Time
  title: Title
  homeTeam: HomeTeam
  awayTeam: AwayTeam
  homeScore: HomeScore
  awayScore: AwayScore
  status: Status
}

export interface Time {
  type: string
  format: string
  description: string
}

export interface Title {
  type: string
  description: string
}

export interface HomeTeam {
  $ref: string
}

export interface AwayTeam {
  $ref: string
}

export interface HomeScore {
  type: string
  description: string
}

export interface AwayScore {
  type: string
  description: string
}

export interface Status {
  $ref: string
}

export interface SuccessfulResponse {
  type: string
  properties: Properties6
  required: string[]
}

export interface Properties6 {
  ok: Ok
  data: Data2
}

export interface Ok {
  type: string
  default: boolean
  description: string
}

export interface Data2 {
  type: string
  description: string
}
