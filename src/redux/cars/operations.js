import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65722dced61ba6fcc0147f98.mockapi.io';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/catalog');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  'cars/getCarById',
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/catalog/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
