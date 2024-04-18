import ToastContent from "models/toast/ToastContent";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../configureStore";
import { toastSlice } from "./slice";

const toastActions = toastSlice.actions;

const addToast =
  (newToast: ToastContent): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) =>
    dispatch(toastActions.addToast({ toast: newToast }));
const closeToast =
  (toastToClose: ToastContent): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) => {
    dispatch(toastActions.closeToast({ toast: toastToClose }));
  };
const removeToast =
  (
    toastToRemove: ToastContent
  ): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) => {
    dispatch(toastActions.removeToast({ toast: toastToRemove }));
  };

const clearAll =
  (): ThunkAction<void, RootState, unknown, Action> => (dispatch) => {
    dispatch(toastActions.clearToasts());
  };

export { addToast, closeToast, removeToast, clearAll };
