import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categoriesSlice";
import productReducer from "./reducers/productsSlice";
import usersReducer from "./reducers/userSlice";

const saveToLocalStorage = (state: RootState) => {
  try {
    const toSave = {
      users: { user: state.users.user },
    };
    localStorage.setItem("state", JSON.stringify(toSave));
  } catch {
    console.warn("Could not save state");
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem("state");
    console.log(serialized);
    if (serialized === null) return undefined;
    return JSON.parse(serialized);
  } catch {
    return undefined;
  }
};
const persistedStore = loadFromLocalStorage();

const rootReducer = combineReducers({
  products: productReducer,
  users: usersReducer,
  categories: categoriesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedStore,
});
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
