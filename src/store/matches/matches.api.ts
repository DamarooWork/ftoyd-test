import {} from '@/app/models/api.matches'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matchesApi = createApi({
  reducerPath: 'matches/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.ftoyd.com',
  }),
  endpoints: (build) => ({
    getMatches: build.query({
      query: () => ({
        url: `/fronttemp-service`,
      }),
    }),
  }),
})

export const { useGetMatchesQuery } = matchesApi
