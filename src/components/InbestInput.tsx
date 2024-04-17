import {
  BaseTextFieldProps,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

interface InbestInputProps extends BaseTextFieldProps {
  title?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InbestInput = (props: InbestInputProps) => {
  const { name, title, startIcon, endIcon, onChange, ...other } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
      }}
    >
      {title && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">{title}</Typography>
        </Box>
      )}
      <TextField
        fullWidth
        InputLabelProps={{
          style: {
            marginTop: "-3px",
          },
        }}
        InputProps={{
          ...getInputProps(startIcon, endIcon),
        }}
        onChange={onChange}
        {...other}
      />
    </Box>
  );
};
const getInputAdornment = (position: "end" | "start", icon?: ReactNode) => {
  return icon === undefined ? undefined : (
    <InputAdornment position={position}>{icon}</InputAdornment>
  );
};

const getInputProps = (startIcon?: ReactNode, endIcon?: ReactNode) => {
  if (startIcon === undefined && endIcon === undefined) {
    return undefined;
  }
  const startAdornment = getInputAdornment("start", startIcon);
  const endAdornment = getInputAdornment("end", endIcon);
  if (startAdornment && endAdornment) {
    return {
      startAdornment: startAdornment,
      endAdornment: endAdornment,
    };
  } else if (startAdornment) {
    return {
      startAdornment: startAdornment,
    };
  } else if (endAdornment) {
    return {
      endAdornment: endAdornment,
    };
  }
};

export default InbestInput;
