import { Action, ThunkAction } from "@reduxjs/toolkit";
import Alert from "models/alert/Alert";
import { RootState } from "../../configureStore";
import { alertSlice } from "../alert/slice";

const alertActions = alertSlice.actions;

export const addAlert =
  (newAlert: Alert): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) => {
    return dispatch(alertActions.addAlert(newAlert));
  };

export const removeAlert =
  (alertToRemove: Alert): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) => {
    dispatch(alertActions.removeAlert(alertToRemove));
  };

export default alertActions;
