import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import sliceApp from './slice';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
    appState: sliceApp,

})

export const store = configureStore({
    reducer: rootReducer
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
