import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { carsReducer } from './cars/carsSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    //filter: [],
  },
});

export const persistor = persistStore(store);
