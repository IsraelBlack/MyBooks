//? Actions

import {Book} from '../../models/types' 
import { ThunkAction } from "../store"
import * as api from  "../apis/books"

export const SET_BOOKS = 'SET_BOOKS'

// *Simple Actions
export function setBooks(books: Book[]) {
  return {
    type: SET_BOOKS,
    payload: books,
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
