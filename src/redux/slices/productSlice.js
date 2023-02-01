import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "idle", productList: [] };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
