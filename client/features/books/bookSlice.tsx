import { createSlice } from '@reduxjs/toolkit'
import { Book } from '../../../models/types'


const initialState = [] as Book[]

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
})

export const selectAllBooks = (state: { books: any }) => state.books

export default bookSlice.reducer