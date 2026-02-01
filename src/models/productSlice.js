import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      name: 'Auriculares Premium',
      price: 250000,
      stock: 5,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      category: 'Audio',
    },
    {
      id: 2,
      name: 'Monitor 4K',
      price: 1200000,
      stock: 2,
      image:
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
      category: 'Pantallas',
    },
    {
      id: 3,
      name: 'Teclado Mecánico',
      price: 180000,
      stock: 8,
      image:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
      category: 'Periféricos',
    },
    {
      id: 4,
      name: 'Mouse Gaming',
      price: 95000,
      stock: 12,
      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop',
      category: 'Periféricos',
    },
    {
      id: 5,
      name: 'Webcam HD',
      price: 145000,
      stock: 0,
      image:
        'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=300&fit=crop',
      category: 'Video',
    },
    {
      id: 6,
      name: 'Laptop Pro',
      price: 3500000,
      stock: 3,
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      category: 'Computadores',
    },
  ],
  cart: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      // Lógica simple de stock
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      // Reducir stock virtualmente
      const productInStock = state.list.find((p) => p.id === product.id);
      if (productInStock && productInStock.stock > 0) {
        productInStock.stock -= 1;
      }
    },
    // Aquí irían acciones como clearCart, etc.
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
