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
        gap: "12px",
        padding: !fullWidth
          ? props.variant === "outlined"
            ? "7px 19px"
            : "8px 20px"
          : "12px 24px",
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
