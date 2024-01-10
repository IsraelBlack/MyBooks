import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import type { ThunkAction as BaseThunkAction } from 'redux-thunk'
import type { AnyAction } from 'redux'

import reducers from './reducers'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type ThunkAction<T = void> = BaseThunkAction<
  Promise<T>,
  RootState,
  void,
  AnyAction
>
export const store = configureStore({
  reducer: {},
})

// export function initialiseStore() {
//   return createStore(
//     reducers,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   )
// }

export default store
