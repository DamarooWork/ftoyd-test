import { Root } from '@/app/models/api.matches'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matchesApi = createApi({
  reducerPath: 'matches/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.ftoyd.com',
  }),
  endpoints: (build) => ({
    getMatches: build.query<Root, string>({
      query: (str) => ({
        url: `/fronttemp-service${str}`,
      }),
    }),
  }),
})

export const { useGetMatchesQuery } = matchesApi
