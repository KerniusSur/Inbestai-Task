import Alert from "models/alert/Alert";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../configureStore";
import { alertSlice } from "../alert/slice";

const alertActions = alertSlice.actions;

const addAlert =
  (newAlert: Alert): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) =>
    dispatch(alertActions.addAlert(newAlert));
const removeAlert =
  (): ThunkAction<void, RootState, unknown, Action> => (dispatch) => {
    dispatch(alertActions.removeAlert());
  };

export { addAlert, removeAlert };
