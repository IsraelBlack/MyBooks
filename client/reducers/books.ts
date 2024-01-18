//? Reducers

import { Book, Action } from '../../models/types'
import {
  SET_BOOKS,
  DEL_BOOK,
  ADD_BOOK,
  SET_ONEBOOK,
  UPDATE_RATING,
} from '../actions/books'

const initialState = [] as Book[]

export default function booksReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload

    case SET_ONEBOOK:
      return payload

    case DEL_BOOK:
      return state.filter((book) => book.id !== payload)

    case ADD_BOOK:
      return [payload, ...state] //NEW move at front of list

    case UPDATE_RATING:
      return payload

    default:
      return state
  }
}
