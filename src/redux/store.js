import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../redux/';
import { postApi } from './getPosts';
import { counterSlice } from './counterSlice,js';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.
      middleware),
});