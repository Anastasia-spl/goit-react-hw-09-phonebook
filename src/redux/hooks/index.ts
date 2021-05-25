import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { TRootState, TAppDispatch } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;