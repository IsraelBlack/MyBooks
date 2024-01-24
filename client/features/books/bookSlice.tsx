import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BookSummary } from '../../../models/types'
import { nanoid } from '@reduxjs/toolkit'

const prepareBookPayload = (title: string, author: string, summary: string) => {
  return {
    id: nanoid(),
    title,
    author,
    summary,
  }
}

const booksSlice = createSlice({
  name: 'books',
  initialState: [] as BookSummary[],
  reducers: {
    bookAdded: (state, action: PayloadAction<BookSummary>) => {
      state.push(action.payload)
    },
    // ... other reducers
  },
})

export const selectAllBooks = (state: { books: any }) => state.books

export const { bookAdded } = booksSlice.actions

export const prepareAndDispatchBook =
  (title: string, author: string, summary: string) => (dispatch: any) => {
    const payload = prepareBookPayload(title, author, summary)
    dispatch(bookAdded(payload))
  }

export default booksSlice.reducer
