//todo import types
//todo import actions

const intialState = []

export default function booksReducer(state = intialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload
    

    default:
      return state
  }
}
