import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: [],
};

export const MyOrderSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        item: action.payload,
      };
      state.dishes.push(newItem);
    },
    removeFromCart: (state, action) => {
      state.dishes.splice(action.payload, 1);
    },
  },
});

export const { addToCart, removeFromCart } = MyOrderSlice.actions;

export default MyOrderSlice.reducer;
