import { createSlice } from '@reduxjs/toolkit'
import { Book } from '../../../models/types'

//const initialState = [] as Book[]

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
  },
]

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
})

export const selectAllBooks = (state: { books: any }) => state.books

export default bookSlice.reducer
