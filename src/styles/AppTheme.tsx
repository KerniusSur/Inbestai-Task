import { createTheme } from "@mui/material";
import { CSSProperties } from "react";

const initialTheme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#F7DB00",
      dark: "DEC500",
      contrastText: "#222222",
    },
    secondary: {
      main: "#222222",
      dark: "#000000",
      contrastText: "#F7DB00",
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
  },
});

const AppTheme = createTheme(initialTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "18px 32px",
          borderRadius: "15px",
          boxShadow: "none",
          "&.Mui-disabled": {
            cursor: "not-allowed",
          },
        },
        outlined: {
          border: "1px solid #222222",
          backgroundColor: "transparent",
          transition: "all 0.3s",
          color: initialTheme.palette.secondary.main,
          "&:hover": {
            backgroundColor: initialTheme.palette.secondary.main,
            color: initialTheme.palette.primary.main,
            borderColor: initialTheme.palette.primary.main,
          },
        },
        contained: {
          border: "1px solid",
          transition: "all 0.3s",
          backgroundColor: initialTheme.palette.secondary.main,
          color: "white",
          "&:hover": {
            backgroundColor: initialTheme.palette.secondary.dark,
            color: initialTheme.palette.secondary.contrastText,
            borderColor: "transparent",
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
          width: "100%",
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
    MuiAlert: {
      styleOverrides: {
        action: {
          alignSelf: "center",
          paddingTop: "0px",
        },
        message: {
          alignSelf: "center",
        },
        icon: {
          alignSelf: "center",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          alignSelf: "center",
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "240px",
      fontWeight: 700,
      lineHeight: 1,
      [initialTheme.breakpoints.down("lg")]: {
        fontSize: "200px",
      },
      [initialTheme.breakpoints.down("md")]: {
        fontSize: "174px",
      },
      [initialTheme.breakpoints.down("sm")]: {
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
      [initialTheme.breakpoints.down("md")]: {
        fontSize: "4rem",
      },
      [initialTheme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
      [initialTheme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    h4: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "45px",
      lineHeight: "1.1em",
      fontStyle: "normal",
      letterSpacing: "-2px",
      fontWeight: 600,
      [initialTheme.breakpoints.down("md")]: {
        fontSize: "36px",
      },
      [initialTheme.breakpoints.down("sm")]: {
        fontSize: "27px",
      },
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
    hyperlink: {
      fontFamily: "Roboto, Sans-serif",
      fontSize: "16px",
      lineHeight: "20px",
      fontStyle: "normal",
      letterSpacing: "0",
      fontWeight: 500,
      textDecoration: "underline",
      cursor: "pointer",
      color: initialTheme.palette.primary.main,
      "&:hover": {
        color: initialTheme.palette.primary.dark,
      },
    },
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
