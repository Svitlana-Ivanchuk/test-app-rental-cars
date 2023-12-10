import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchCars } from './operations';

import initialCars from '../../advertsCars.json';
console.log(initialCars);
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
console.log(initialCars);
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    catalog: initialCars,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //state.cars.push(...action.payload);
        state.cars = action.payload;
        //return action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

const persistConfig = {
  key: 'cars',
  storage,
};

export const carsReducer = persistReducer(persistConfig, carsSlice.reducer);
