//? Actions

import { Book, BookData } from '../../models/types'
import { ThunkAction } from '../store'
import * as api from '../apis/books'

export const SET_BOOKS = 'SET_BOOKS'
export const SET_ONEBOOK = 'SET_ONEBOOK'
export const DEL_BOOK = 'DEL_BOOK'
export const ADD_BOOK = 'ADD_BOOK'
export const UPDATE_RATING = 'UPDATE_RATING'

// *Simple Actions
export function setBooks(books: Book[]) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function setOneBook(id: number, books: Book[]) {
  return {
    type: SET_ONEBOOK,
    payload: id,
    books,
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

export function updateRating(id: number, newRating: number) {
  return {
    type: UPDATE_RATING,
    payload: newRating,
  }
}

// *Thunks
export function getBooks(): ThunkAction {
  return async (dispatch) => {
    try {
      const booksArr = await api.fetchBooks()
      dispatch(setBooks(booksArr))
    } catch (err) {
      console.error('Thunk fail: ', err)
    }
  }
}

export function getOneBook(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      const booksObj = await api.fetchOneBook(id)
      dispatch(setOneBook(1, booksObj))
      console.log('Fetching a book')
    } catch (err) {
      console.log('Thunk failed: ', err)
    }
  }
}

export function delBookThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.remove(id)
      dispatch(delBook(id))
    } catch (err) {
      console.error('Thunk fail: ', err)
    }
  }
}

export function addBookThunk(book: BookData): ThunkAction {
  return async (dispatch) => {
    try {
      const newBook = await api.postBook(book)
      dispatch(addBook(newBook))
    } catch (err) {
      console.error('Thunk fail: ', err)
    }
  }
}

export function updateRatingThunk(id: number, newRating: number) {
  return async (dispatch) => {
    try {
      await api.updateRating(id, newRating)
      dispatch(updateRating(id, newRating))
    } catch (err) {
      console.error('Thunk failed: ', err)
    }
  }
}
