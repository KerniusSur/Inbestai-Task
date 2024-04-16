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
import alerts from "../store/alerts";
import { useAppSelector } from "../store/hooks";

const InbestSnackbar = () => {
  const alert = useAppSelector((state) => state.alerts);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    alerts.removeAlert();
  };

  return (
    <Snackbar
      open={alert.alert?.open}
      autoHideDuration={6000}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      aria-describedby="client-snackbar"
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={alert.alert?.severity}
        sx={{ width: "100%" }}
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
        <Typography variant="body2">{alert.alert?.message}</Typography>
      </Alert>
    </Snackbar>
  );
};

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

export default InbestSnackbar;
