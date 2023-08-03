//? Actions

import { Book, BookData } from '../../models/types'
import { ThunkAction } from '../store'
import * as api from '../apis/books'

export const SET_BOOKS = 'SET_BOOKS'
export const SET_ONEBOOK = 'SET_ONEBOOK'
export const DEL_BOOK = 'DEL_BOOK'
export const ADD_BOOK = 'ADD_BOOK'

// *Simple Actions
export function setBooks(books: Book[]) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function delBook(id: number) {
  return {
    type: DEL_BOOK,
    payload: id,
  }
}

export function addBook(book: BookData) {
  return {
    type: ADD_BOOK,
    payload: book,
  }
}

// *Thunks
export function getBooks(): ThunkAction {
  return async (dispatch) => {
    try {
      const booksArr = await api.fetchBooks()
      dispatch(setBooks(booksArr))
    } catch (err) {
      console.error('Actions fail: ', err)
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

export function addBookThunk(book: BookData): ThunkAction {
  return async (dispatch) => {
    try {
      const newBook = await api.postBook(book)
      dispatch(addBook(newBook))
    } catch (err) {
      console.error('Actions fail: ', err)
    }
  }
}
