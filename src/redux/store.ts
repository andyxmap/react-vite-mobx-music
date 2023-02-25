import { configureStore } from '@reduxjs/toolkit';
import userStateSlice  from './state/userStateSlice'


import { enableMapSet } from 'immer'

enableMapSet()

export const store = configureStore({
    reducer: {
       user: userStateSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch