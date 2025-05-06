import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productsSlice";
import usersReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
