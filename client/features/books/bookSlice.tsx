import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BookSummary } from '../../../models/types'
import { nanoid } from '@reduxjs/toolkit'

interface BookPayload {
  id: string
  title: string
  author: string
  summary: string
}

const booksSlice = createSlice({
  name: 'books',
  initialState: [] as BookSummary[],
  reducers: {
    bookAdded: (state, action: PayloadAction<BookPayload>) => {
      state.push(action.payload)
    },
    // ... other reducers
  },
})

export const selectAllBooks = (state: { books: any }) => state.books

export const { bookAdded } = booksSlice.actions

export default booksSlice.reducer
