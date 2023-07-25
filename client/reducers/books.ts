//?

import { Book, Action } from "../../models/types"
import { SET_BOOKS } from "../actions/books"

const initialState = [] as Book[]

export default function booksReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload
    

    default:
      return state
  }
}
