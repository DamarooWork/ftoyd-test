import { MatchesAPI } from '@/app/models/api.matches'
import { BASE_URL_API_FTOYD } from '@/lib/constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matchesApi = createApi({
  reducerPath: 'matches/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API_FTOYD,
  }),
  endpoints: (build) => ({
    getMatches: build.query<MatchesAPI, void>({
      query: () => ({
        url: `/fronttemp-service/fronttemp`,
      }),
    }),
  }),
})

export const { useGetMatchesQuery, useLazyGetMatchesQuery } = matchesApi
