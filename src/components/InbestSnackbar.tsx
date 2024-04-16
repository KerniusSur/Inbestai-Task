import {
  Alert,
  Slide,
  SlideProps,
  Snackbar,
  SnackbarProps,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import alerts from "../store/alerts";

interface InbestSnackbarProps extends SnackbarProps {
  open: boolean;
  severity: "success" | "error" | "warning" | "info";
}

const InbestSnackbar = (props: InbestSnackbarProps) => {
  const { open, severity, message, ...other } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    alerts.removeAlert();
    setIsOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        // TransitionComponent={(props: SlideProps) => <Slide {...props} direction="left" />}
        // TransitionComponent={SlideTransition}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        message={message}
      >
        {/* <Alert
        onClose={handleClose}
        variant="filled"
        severity={severity}
        sx={{ width: "100%" }}
      >
        <Typography variant="body2">{message}</Typography>
      </Alert> */}
      </Snackbar>
    </div>
  );
};

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

export default InbestSnackbar;
