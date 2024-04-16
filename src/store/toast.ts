import ToastContent from "models/toast/ToastContent";
import { store } from "./configureStore";
import { addToast, closeToast } from "./modules/toast/actions";

const toasts = {
  addToast: (newToast: ToastContent) => {
    store.dispatch(addToast(newToast));
  },
  closeToast: (toastToClose: ToastContent) => {
    store.dispatch(closeToast(toastToClose));
  },
};

export default toasts;
