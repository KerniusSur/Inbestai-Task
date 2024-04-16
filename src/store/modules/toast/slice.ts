import { createSlice } from "@reduxjs/toolkit";
import ToastState from "models/toast/ToastState";

const initialState: ToastState = {
  toast: undefined,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: initialState,
  reducers: {
    addToast: (state, action) => {
      state.toast = action.payload.toast;
    },
    closeToast: (state, action) => {
      state.toast = action.payload.toast;
    },
  },
});

export const { addToast, closeToast: removeToast } = toastSlice.actions;

export default toastSlice.reducer;
