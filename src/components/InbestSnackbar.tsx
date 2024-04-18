import { CloseOutlined } from "@mui/icons-material";
import {
  Alert,
  IconButton,
  Slide,
  SlideProps,
  Snackbar,
  Typography,
} from "@mui/material";
import ToastContent from "models/toast/ToastContent";
import { SyntheticEvent, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import toast from "../store/toast";

const InbestSnackbar = () => {
  const toastState = useAppSelector((state) => state.toasts);
  const [currentToast, setCurrentToast] = useState<ToastContent | null>(null);
  const [toasts, setToasts] = useState<ToastContent[]>([]);

  useEffect(() => {
    if (toasts.length === toastState.toasts.length) {
      setCurrentToast(toastState.toasts[0]);
    }

    setToasts(toastState.toasts);
  }, [currentToast, toastState.toasts, toasts.length]);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    if (currentToast) {
      toast.close(currentToast);
    }
  };

  return (
    <Snackbar
      open={currentToast?.open}
      disableWindowBlurListener
      autoHideDuration={3000}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      sx={{
        marginTop: "1rem",
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Alert
        variant="filled"
        severity={currentToast?.severity}
        onClose={handleClose}
        sx={{ width: "100%", display: "flex", alignItems: "center" }}
        action={
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseOutlined />
          </IconButton>
        }
      >
        <Typography variant="body2">{currentToast?.message}</Typography>
      </Alert>
    </Snackbar>
  );
};

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="right" />;
};

export default InbestSnackbar;
