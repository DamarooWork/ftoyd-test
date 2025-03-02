import { configureStore } from '@reduxjs/toolkit'
import { matchesApi } from './matches/matches.api'
import { filterReducer } from './matches/filterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [matchesApi.reducerPath]: matchesApi.reducer,
      filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(matchesApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
