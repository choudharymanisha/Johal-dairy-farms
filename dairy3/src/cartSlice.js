// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantities: { 500: 0, 1000: 0, 1500: 0 },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const size = action.payload;
      state.quantities[size] += 1;
      const existingItem = state.items.find(item => item.size === size);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ size, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const size = action.payload;
      if (state.quantities[size] > 0) {
        state.quantities[size] -= 1;
        const existingItem = state.items.find(item => item.size === size);
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.size !== size);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
