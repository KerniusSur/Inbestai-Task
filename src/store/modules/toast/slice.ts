import { createSlice } from "@reduxjs/toolkit";
import ToastState from "../../../models/toast/ToastState";


const initialState: ToastState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: "toasts",
  initialState: initialState,
  reducers: {
    addToast: (state, action) => {
      // Limit the number of toasts to 10
      if (state.toasts.length < 10) {
        state.toasts.push(action.payload.toast);
      }
    },
    closeToast: (state, action) => {
      state.toasts = state.toasts.map((toast) => ({
        ...toast,
        open: toast.id === action.payload.toast.id ? false : toast.open,
      }));
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload.toast.id
      );
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { addToast, closeToast, removeToast, clearToasts } =
  toastSlice.actions;

export default toastSlice.reducer;
