import { createTheme } from "@mui/material";
import { colors, palleteColors } from "../theme/colors";
import { CSSProperties } from "react";

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 1280,
    xl: 1920,
  },
};
const AppTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "18px 32px !important",
          borderRadius: "15px",
        },
        outlined: {
          border: "1px solid",
          borderColor: "#222222",
          background: "transparent",
          transition: "all 0.3s",
          "&:hover": {
            background: colors.black,
            color: colors.yellow,
          },
        },
        contained: {
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
          height: "80px",
          minHeight: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "80px",
          boxShadow: "none",
        },
      },
    },
  },
  breakpoints,
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
    h1: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "240px",
      fontWeight: 700,
      lineHeight: 1,
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: "200px",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: "174px",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "120px",
      },
    },
    h2: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "7.2vw",
      lineHeight: "1.1em",
      letterSpacing: "-4px",
      fontStyle: "normal",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "5rem",
      lineHeight: "1.1em",
      letterSpacing: "-4px",
      fontStyle: "normal",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Roboto, Sans-serif",
      color: "#222222",
      fontSize: "45px",
      lineHeight: "1.1em",
      fontStyle: "normal",
      letterSpacing: "-4px",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "19px",
      lineHeight: "20px",
      fontStyle: "normal",
      letterSpacing: "0",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "16px",
      lineHeight: "20px",
      fontStyle: "normal",
      letterSpacing: "0",
      fontWeight: 500,
    },
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

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    hyperlink: true;
    overline: false;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    hyperlink: CSSProperties;
  }
}

export default AppTheme;
