import { createSlice } from "@reduxjs/toolkit";
import AlertSlice from "models/alert/AlertSlice";

const initialState: AlertSlice = {
  alert: undefined,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    addAlert: (state, action) => {
      state.alert = action.payload.alert;
    },
    removeAlert: (state) => {
      state.alert = undefined;
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
