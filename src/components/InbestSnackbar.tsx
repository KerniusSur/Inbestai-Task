import { CloseOutlined } from "@mui/icons-material";
import {
  Alert,
  IconButton,
  Slide,
  SlideProps,
  Snackbar,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { handleNewLine } from "../components/InbestCard";
import { useAppSelector } from "../hooks/reduxHooks";
import ToastContent from "../models/toast/ToastContent";
import toast from "../store/toast";

const InbestSnackbar = () => {
  const { toasts } = useAppSelector((state) => state.toasts);
  const [currentToast, setCurrentToast] = useState<ToastContent | null>(null);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    if (currentToast) {
      toast.close(currentToast);
    }
  };

  useEffect(() => {
    if (toasts.length > 0) {
      setCurrentToast(toasts[0]);
    }
  }, [currentToast, toasts]);

  return (
    <Snackbar
      open={currentToast?.open ?? false}
      disableWindowBlurListener
      autoHideDuration={3000}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      aria-label="Notification"
    >
      <Alert
        variant="filled"
        severity={currentToast?.severity}
        onClose={handleClose}
        action={
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseOutlined key="close" aria-label="close" />
          </IconButton>
        }
        role="alert"
        aria-live="assertive"
      >
        <Typography variant="body2">
          {handleNewLine(currentToast?.message)}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="right" />;
};

export default InbestSnackbar;
