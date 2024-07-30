import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    hapusCart: (state) => {
      state.data = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, hapusCart } = cartSlice.actions;
export default cartSlice.reducer;
