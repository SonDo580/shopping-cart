import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false, productList: [], error: null };

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
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      return data.products;
    } catch (err) {
      throw err;
    }
  }
);

export default productSlice.reducer;
