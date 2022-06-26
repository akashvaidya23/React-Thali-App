import { configureStore } from "@reduxjs/toolkit";
import MyOrderSlice from "../src/features/MyOrder/MyOrderSlice";

export const store = configureStore({
  reducer: { myItems: MyOrderSlice },
});
