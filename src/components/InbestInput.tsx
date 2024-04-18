import {
  BaseTextFieldProps,
  Box,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, KeyboardEvent } from "react";

interface InbestInputProps extends BaseTextFieldProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
  onEnterKeyPress?: () => void | undefined;
}

const InbestInput = (props: InbestInputProps) => {
  const { title, onChange, onEnterKeyPress, ...other } = props;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && onEnterKeyPress) {
      onEnterKeyPress();
    }
  };

  return (
    <InputContainer>
      {title && (
        <InputTitleContainer>
          <Typography variant="body2">{title}</Typography>
        </InputTitleContainer>
      )}
      <TextField
        fullWidth
        InputLabelProps={{
          style: {
            marginTop: "-3px",
          },
        }}
        onChange={onChange}
        {...other}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
};

const InputContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
});

const InputTitleContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export default InbestInput;
