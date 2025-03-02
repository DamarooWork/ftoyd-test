import { CardStatusType } from '@/app/components/matchesList/CardStatus'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface filterState {
  filter: CardStatusType | 'Все статусы'
}

const initialState = {
  filter: 'Все статусы',
} satisfies filterState as filterState

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<CardStatusType | 'Все статусы'>) {
      state.filter = action.payload
    },
  },
})

export const { changeFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
