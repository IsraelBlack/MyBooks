import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}, //TODO Add reducers once made
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

