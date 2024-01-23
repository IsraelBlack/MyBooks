import { createSlice } from '@reduxjs/toolkit'
import { Book } from '../../../models/types'

const initialState = [] as Book[]

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const selectAllBooks = (state: { books: any }) => state.books

export const { bookAdded } = bookSlice.actions

export default bookSlice.reducer
