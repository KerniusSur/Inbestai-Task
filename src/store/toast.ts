import ToastContent from "models/toast/ToastContent";
import { v4 as uiidv4 } from "uuid";
import { store } from "./configureStore";
import {
  addToast,
  clearAll,
  closeToast,
  removeToast,
} from "./modules/toast/actions";

export const constructToast = (
  message: string,
  severity: "info" | "error" | "success" | "warning"
) => {
  const newToast: ToastContent = {
    id: uiidv4(),
    open: true,
    message,
    severity: severity,
    createdAt: new Date().toISOString(),
  };
  return newToast;
};

const toasts = {
  success: (message: string) => {
    const toast = constructToast(message, "success");
    store.dispatch(addToast(toast));
  },
  error: (message: string) => {
    const toast = constructToast(message, "error");
    store.dispatch(addToast(toast));
  },
  info: (message: string) => {
    const toast = constructToast(message, "info");
    store.dispatch(addToast(toast));
  },
  warning: (message: string) => {
    const toast = constructToast(message, "warning");
    store.dispatch(addToast(toast));
  },
  clear: () => {
    store.dispatch(clearAll());
  },
  remove: (toastToRemove: ToastContent) => {
    store.dispatch(removeToast(toastToRemove));
  },
  close: (toastToClose: ToastContent) => {
    store.dispatch(closeToast(toastToClose));
    setTimeout(() => {
      store.dispatch(removeToast(toastToClose));
    }, 400);
  },
};

export default toasts;
