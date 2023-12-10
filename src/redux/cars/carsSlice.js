import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    catalog: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //state.catalog.push(...action.payload);
        //state.catalog = action.payload;
        return action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

const persistConfig = {
  key: 'cars',
  storage,
};

export const carsReducer = persistReducer(persistConfig, carsSlice.reducer);
