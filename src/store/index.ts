import { configureStore } from '@reduxjs/toolkit'
import { matchesApi } from './matches/matches.api'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [matchesApi.reducerPath]: matchesApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(matchesApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
