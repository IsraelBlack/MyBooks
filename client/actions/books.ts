//? Actions

import {Book} from '../../models/types' 
import { ThunkAction } from "../store"
import * as api from  "../apis/books"

export const SET_BOOKS = 'SET_BOOKS'
export const DEL_BOOK = 'DEL_BOOK'

// *Simple Actions
export function setBooks(books: Book[]) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function delBook(id: number) {
  return { 
    type: DEL_BOOK ,
    payload: id
  }
}

// *Thunks
export function getBooks(): ThunkAction {
  return async (dispatch) => {
    try {
      const booksArr = await api.fetchBooks()
      dispatch(setBooks(booksArr))
    } catch (err) {
      console.error('Error in action ', err)
    }
  }
}

export function delBookThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.remove(id)
      dispatch(delBook(id))
    } catch (err) {
      console.error('Actions fail: ', err)
    }
    
  } 
}
