import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      let deleteIndex = state.findIndex((item) => item.id === action.payload);
      state.splice(deleteIndex, 1);
    },
    updateQuantity: {
      reducer: (state, action) => {
        let updateItem = state.find((item) => item.id === action.payload.id);
        updateItem.quantity = action.payload.quantity;
      },
      prepare: (id, quantity) => {
        return { payload: { id, quantity } };
      },
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
