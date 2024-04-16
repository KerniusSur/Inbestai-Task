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
    const closedToast = {
      ...toastToClose,
      open: false,
    };
    dispatch(toastActions.closeToast({ toast: closedToast }));
  };

export { addToast, closeToast };
