import { createSelector } from "@reduxjs/toolkit";

export const productListSelector = (state) => state.products.productList;
export const loadingStatusSelector = (state) => state.products.isLoading;
export const errorFetchingSelector = (state) => state.products.error;

export const cartItemsSelector = (state) => state.cart;

export const totalSelector = createSelector(cartItemsSelector, (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

export const quantitySelector = createSelector(
  cartItemsSelector,
  (cartItems) => {
    return cartItems.length;
  }
);
