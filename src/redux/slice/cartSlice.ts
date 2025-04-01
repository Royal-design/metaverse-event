import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  qty: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = (() => {
  try {
    const storedData = JSON.parse(localStorage.getItem("corex-cart") || "{}");
    return {
      items: Array.isArray(storedData.items) ? storedData.items : [],
      totalQuantity:
        typeof storedData.totalQuantity === "number"
          ? storedData.totalQuantity
          : 0,
      totalPrice:
        typeof storedData.totalPrice === "number" ? storedData.totalPrice : 0
    };
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return {
      items: [],
      totalQuantity: 0,
      totalPrice: 0
    };
  }
})();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        name,
        price,
        description,
        image,
        qty = 1
      }: CartItem = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += qty;
        existingItem.totalPrice = price * existingItem.qty;
      } else {
        state.items.push({
          id,
          name,
          price,
          description,
          image,
          qty,
          totalPrice: qty * price
        });
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      localStorage.setItem("corex-cart", JSON.stringify(state));
      toast.success("Product added to cart");
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      localStorage.setItem("corex-cart", JSON.stringify(state));
      toast.success("Product removed from cart!");
    },
    updateCart: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const { id, qty } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty = qty;
        existingItem.totalPrice = existingItem.price * qty;
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      localStorage.setItem("corex-cart", JSON.stringify(state));
      toast.success("Product quantity updated");
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.setItem("corex-cart", JSON.stringify(state));
      toast.success("All products cleared from cart");
    },
    order: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.setItem("corex-cart", JSON.stringify(state));
      toast.success("Order placed successfully");
    }
  }
});

export const { addToCart, clearCart, removeFromCart, updateCart, order } =
  cartSlice.actions;
