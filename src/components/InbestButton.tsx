/* eslint-disable no-undef */
import { Button, ButtonProps, Typography } from "@mui/material";

interface InbestButtonProps extends ButtonProps {
  text: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
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
