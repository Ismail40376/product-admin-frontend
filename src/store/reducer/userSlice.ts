import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  registered: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  registered: false,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUserRequest(state) {
      state.loading = true;
      state.error = null;
      state.registered = false;
    },
    registerUserSuccess(state) {
      state.loading = false;
      state.registered = true;
      state.error = null;
    },
    registerUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.registered = false;
      state.error = action.payload;
    },
  },
});

export const { registerUserRequest, registerUserSuccess, registerUserFailure } = usersSlice.actions;

export default usersSlice.reducer;
