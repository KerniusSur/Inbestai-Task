import { Snackbar, SnackbarProps } from "@mui/material";

interface InbestSnackbarProps extends SnackbarProps {
variant: "success" | "error" | "warning" | "info";
}

const InbestSnackbar = (props: InbestSnackbarProps) => {
  return <Snackbar />;
};

export default InbestSnackbar;
