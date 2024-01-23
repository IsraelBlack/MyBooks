import { createSlice } from '@reduxjs/toolkit'
import { Book } from '../../../models/types'

const initialState = [] as Book[]

const booksSlice = createSlice({
  name: 'books',
  initialState: [] as Book[],
  reducers: {
    bookAdded: (state, action) => {
      // Use the spread operator to create a new array with the updated data
      return [...state, action.payload]
    },
    // ... other reducers
  },
})

export const selectAllBooks = (state: { books: any }) => state.books

export const { bookAdded } = booksSlice.actions

export default booksSlice.reducer
