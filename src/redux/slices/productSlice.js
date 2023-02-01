import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false, productList: [] };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    return data.products;
  }
);

export default productSlice.reducer;
