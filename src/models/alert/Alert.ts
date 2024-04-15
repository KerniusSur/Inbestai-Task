interface Alert {
  id: number;
  message: string;
  severity: "error" | "warning" | "info" | "success";
  createdAt: string;
}

export default Alert;
