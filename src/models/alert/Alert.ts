interface Alert {
  id: string;
  message: string;
  severity: "error" | "warning" | "info" | "success";
  createdAt: Date;
}

export default Alert;
