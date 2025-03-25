import { products } from "@/assets/data/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductType = (typeof products)[0];

interface ProductState {
  products: ProductType[];
  filterProducts: ProductType[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  filterProducts: [],
  loading: false
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
      state.filterProducts = action.payload;
    }
  }
});

export const { setProducts, setLoading } = productSlice.actions;

export default productSlice.reducer;
