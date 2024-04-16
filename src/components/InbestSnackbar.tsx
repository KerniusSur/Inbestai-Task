import { CloseOutlined } from "@mui/icons-material";
import {
  Alert,
  IconButton,
  Slide,
  SlideProps,
  Snackbar,
  Typography,
} from "@mui/material";
import { SyntheticEvent } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import toasts from "../store/toast";

const InbestSnackbar = () => {
  const toast = useAppSelector((state) => state.toasts.toast);
  const isToastOpen = useAppSelector((state) => state.toasts.toast?.open);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    if (!toast) {
      return;
    }

    toasts.closeToast(toast);
  };

  return (
    <Snackbar
      open={isToastOpen}
      autoHideDuration={5000}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Alert
        variant="filled"
        severity={toast?.severity}
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
        <Typography variant="body2">{toast?.message}</Typography>
      </Alert>
    </Snackbar>
  );
};

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="right" />;
};

export default InbestSnackbar;
