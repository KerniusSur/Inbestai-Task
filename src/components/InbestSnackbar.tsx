import {
  Alert,
  Slide,
  SlideProps,
  Snackbar,
  SnackbarProps,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

interface InbestSnackbarProps extends SnackbarProps {
  open: boolean;
  severity: "success" | "error" | "warning" | "info";
}

const InbestSnackbar = (props: InbestSnackbarProps) => {
  const { open, severity, message, ...other } = props;
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      // TransitionComponent={(props: SlideProps) => <Slide {...props} direction="left" />}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...other}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={severity}
        sx={{ width: "100%" }}
      >
        <Typography variant="body2">{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

export default InbestSnackbar;
