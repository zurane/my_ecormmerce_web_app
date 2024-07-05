import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    counterPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // This totalPrice will receive product price as payload to update the cart on every click of buy now button
      state.totalPrice += action.payload;
      // The counterPrice will be incremented by 1 on every click of buy now button
      state.counterPrice += 1;
    },
  },
});

export const { addToCart} = cartSlice.actions;

export default cartSlice.reducer;
