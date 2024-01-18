import { createSlice } from '@reduxjs/toolkit'
import { Book } from '../../../models/types'


const initialState = [] as Book[]

const bookSlice = createSlice({
  name: 'books',
  initialState,
 reducers: {}
})
