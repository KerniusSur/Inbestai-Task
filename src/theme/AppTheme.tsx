import { createTheme } from "@mui/material";
import { colors, palleteColors } from "../theme/colors";

const AppTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "17px 30px",
        },
        outlinedPrimary: {
          border: "1px solid",
          borderColor: colors.black,
          background: "transparent",
          transition: "all 0.3s",
          "&:hover": {
            background: colors.black,
            color: colors.yellow,
          },
        },
        outlinedSecondary: {
          border: "1px solid",
          background: palleteColors.primary.main,
          transition: "all 0.3s",
          "&:hover": {
            background: palleteColors.primary.dark,
            color: colors.black,
          },
        },
      },
    },
    MuiAppBar: {},
  },
  palette: {
    primary: {
      main: "#F7DB00",
      contrastText: "#222222",
    },
    error: {
      main: "#BA1A1A",
      dark: "#FFB4AB",
    },
    background: {
      default: "#F1F1F1",
    },
    text: {
      primary: "#222222",
      secondary: "#",
    },
  },
  typography: {
    h1: {},
    h2: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "7.2vw",
      lineHeight: "1.1em",
      letterSpacing: "-4px",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "5rem",
      lineHeight: "1.1em",
      letterSpacing: "-4px",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Roboto, Sans-serif",
      color: "#222222",
      fontSize: "45px",
      lineHeight: "1.1em",
      letterSpacing: "-4px",
      fontWeight: 600,
    },
    h5: {},
    h6: {},
    body1: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "1.25rem",
      lineHeight: "1.3em",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "1rem",
      lineHeight: "1.3em",
      fontWeight: 400,
    },
    button: {
      fontSize: "20px",
      lineHeight: "15px",
    },
    subtitle1: {},
    subtitle2: {},
  },
});

export default AppTheme;
