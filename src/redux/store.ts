import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productSlice } from "./slice/productSlice";
import { formSlice } from "./slice/formSlice";
import { cartSlice } from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    form: formSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Firebase Timestamp warnings
        ignoredActions: ["auth/setUser", "auth/setUsers"],
        ignoredPaths: ["auth.user.updatedAt", "auth.users.updatedAt"]
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Define AppThunk type for asynchronous actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
