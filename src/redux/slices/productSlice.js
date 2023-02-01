import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Images } from "../../constants/images";

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

const products = [
  {
    id: 1,
    category: "reptile",
    name: "t-rex",
    price: 100,
    image: Images.DINOSAUR,
  },
  {
    id: 2,
    category: "mammal",
    name: "leopard",
    price: 120,
    image: Images.LEOPARD,
  },
  {
    id: 3,
    category: "insect",
    name: "dragonfly",
    price: 110,
    image: Images.MOSQUITO,
  },
  {
    id: 4,
    category: "reptile",
    name: "spinosaurous",
    price: 200,
    image: Images.DINOSAUR,
  },
  {
    id: 5,
    category: "mammal",
    name: "tiger",
    price: 150,
    image: Images.LEOPARD,
  },
  {
    id: 6,
    category: "insect",
    name: "mosquito",
    price: 180,
    image: Images.MOSQUITO,
  },
];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    });
  }
);

export default productSlice.reducer;
