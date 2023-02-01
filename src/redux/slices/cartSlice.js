import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
