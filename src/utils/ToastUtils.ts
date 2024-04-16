import ToastContent from "models/toast/ToastContent";
import toasts from "../store/toast";

export const constructToast = (
  message: string,
  severity: "info" | "error" | "success" | "warning"
) => {
  const newToast: ToastContent = {
    open: true,
    message,
    severity: severity,
    createdAt: new Date().toISOString(),
  };
  return newToast;
};

const ToastUtils = {
  showErrorToast: (message: string) => {
    const toast = constructToast(message, "error");
    toasts.addToast(toast);
  },

  showSuccessToast: (message: string) => {
    const toast = constructToast(message, "success");
    toasts.addToast(toast);
  },

  showInfoToast: (message: string) => {
    const toast = constructToast(message, "info");
    toasts.addToast(toast);
  },

  showWarningToast: (message: string) => {
    const toast = constructToast(message, "warning");
    toasts.addToast(toast);
  },
};

export const showErrorToast = ToastUtils.showErrorToast;
export const showSuccessToast = ToastUtils.showSuccessToast;
export const showInfoToast = ToastUtils.showInfoToast;
export const showWarningToast = ToastUtils.showWarningToast;
export default ToastUtils;
