import { createTheme } from "@mui/material";
import { CSSProperties } from "react";
import { colors } from "../theme/colors";

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 1280,
    xl: 1920,
  },
};

export const palette = {
  primary: {
    main: "#F7DB00",
    dark: "DEC500",
    contrastText: "#222222",
  },
  error: {
    main: "#BA1A1A",
    dark: "#FFB4AB",
  },
  background: {
    default: "#FFFFFF",
  },
  text: {
    primary: "#222222",
    secondary: "#000000",
  },
};

const AppTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "18px 32px",
          borderRadius: "15px",
          boxShadow: "none",
        },
        outlined: {
          border: "1px solid #222222",
          background: "transparent",
          transition: "all 0.3s",
          color: "#222222",
          "&:hover": {
            background: colors.black,
            color: palette.primary.main,
            borderColor: colors.black,
          },
        },
        contained: {
          border: "1px solid",
          background: palette.primary.main,
          transition: "all 0.3s",
          "&:hover": {
            background: palette.primary.dark,
            color: colors.black,
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined", fullWidth: false },
          style: {
            padding: "15px 31px",
          },
        },
        {
          props: { variant: "contained", fullWidth: false },
          style: {
            padding: "15px 31px",
          },
        },
      ],
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
  breakpoints,
  palette,
  // TODO: Add breakpoints to typography
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
      letterSpacing: "-2px",
      fontStyle: "normal",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "5rem",
      lineHeight: "1.1em",
      letterSpacing: "-2px",
      fontStyle: "normal",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "45px",
      lineHeight: "1.1em",
      fontStyle: "normal",
      letterSpacing: "-2px",
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
      fontFamily: "Roboto, Sans-serif",
      fontSize: "20px",
      lineHeight: "15px",
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "none",
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
