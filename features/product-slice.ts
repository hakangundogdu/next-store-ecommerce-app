import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../constants/url';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type InitialState = {
  loading: boolean;
  products: Product[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  products: [],
  error: '',
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
  return axios.get(`${API_BASE_URL}`).then((response) => response.data);
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
        state.error = '';
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = 'Something went wrong.';
    });
  },
});

export default productSlice.reducer;
