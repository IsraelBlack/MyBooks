// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../state/store'
import type { ThunkDispatch } from 'redux-thunk'
import type { AnyAction } from 'redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => ThunkDispatch<RootState, void, AnyAction> =
  useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
