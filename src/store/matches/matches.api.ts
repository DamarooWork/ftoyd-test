import { Root } from '@/app/models/api.matches'
import { BASE_URL_API_FTOYD } from '@/lib/constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matchesApi = createApi({
  reducerPath: 'matches/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API_FTOYD,
  }),
  endpoints: (build) => ({
    getMatches: build.query<Root, void>({
      query: () => ({
        url: `/fronttemp-service`,
      }),
    }),
  }),
})

export const { useGetMatchesQuery, useLazyGetMatchesQuery } = matchesApi
