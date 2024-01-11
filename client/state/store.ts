import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}, //TODO Add reducers once made
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/* ************* */
/* Legacy Store */
/* ************* */

// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from '@redux-devtools/extension'
// import type { ThunkAction as BaseThunkAction } from 'redux-thunk'
// import type { AnyAction } from 'redux'

// import reducers from './reducers'

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// export type ThunkAction<T = void> = BaseThunkAction<
//   Promise<T>,
//   RootState,
//   void,
//   AnyAction
// >

// export function initialiseStore() {
//   return createStore(
//     reducers,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   )
// }

// const store = initialiseStore()

// export default store
