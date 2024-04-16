interface Alert {
  id: string;
  message: string;
  severity: "error" | "warning" | "info" | "success";
  createdAt: string;
}

export default Alert;
