import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from '../api/productService';

// THUNK: La acción asíncrona que consume el servicio
export const fetchProductsAsync = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productService.getProducts();
      return response.data; // Esto será el payload del 'fulfilled'
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    cart: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      // Actualizamos stock en la lista global del store
      const productInList = state.list.find((p) => p.id === product.id);
      if (productInList) productInList.stock -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload; // Guardamos la data del service en el store
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
