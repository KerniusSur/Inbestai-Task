import { Button, ButtonProps, Typography } from "@mui/material";
import { ReactNode } from "react";

interface InbestButtonProps extends ButtonProps {
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const InbestButton = (props: InbestButtonProps) => {
  const { text, startIcon, fullWidth, endIcon, ...other } = props;
  return (
    <Button
      fullWidth={fullWidth}
      sx={{
        display: "flex",
        alignItems: "center",
        textTransform: "none !important",
        gap: "12px",
        "&:hover": {
          cursor: other.disabled ? "not-allowed" : "pointer",
        },
      }}
      {...other}
    >
      {startIcon}
      <Typography variant="button">{text}</Typography>
      {endIcon}
    </Button>
  );
};

export default InbestButton;
