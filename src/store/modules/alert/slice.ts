import { createSlice } from "@reduxjs/toolkit";
import AlertSlice from "models/alert/AlertSlice";

const initialState: AlertSlice = {
  alerts: [],
};

export const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter(
        (alert) => alert.id !== action.payload
      );
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
