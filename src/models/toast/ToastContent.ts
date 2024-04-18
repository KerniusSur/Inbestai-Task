interface ToastContent {
  id: string;
  open: boolean;
  message: string;
  severity: "error" | "warning" | "info" | "success";
  createdAt: string;
}

export default ToastContent;
