import { MenuOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton, styled, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InbestExerciseLogo from "../assets/inbest-exercise-logo.svg";
import InbestDrawer from "../components/InbestDrawer";

interface InbestNavbarProps {
  isDrawerOpen: boolean;
  drawerWidth: number;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}

const InbestNavbar = (props: InbestNavbarProps) => {
  const { isDrawerOpen, drawerWidth, setIsDrawerOpen } = props;

  const navigate = useNavigate();

  const [isHeaderMinimized, setIsHeaderMinimized] = useState<boolean>(false);

  useEffect(() => {
    const listenScrollEvent = (event: Event) => {
      if (typeof window !== "undefined") {
        setIsHeaderMinimized(window.scrollY > 150);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <AppBar
        position="fixed"
        open={isDrawerOpen}
        sx={{
          transition: "background-color 1s ease",
          backgroundColor: isHeaderMinimized
            ? "background.paper"
            : "primary.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            padding: "16px 32px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              width: "100%",
            }}
          >
            <Box
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                style={{
                  height: "42px",
                }}
                alt="inbest-exercise-logo"
                src={InbestExerciseLogo as any}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
              }}
            >
              <Typography
                variant="h5"
                onClick={() => {
                  navigate("/");
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Home
              </Typography>

              <Typography
                variant="h5"
                onClick={() => {
                  navigate("/about");
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                About
              </Typography>

              <Typography
                variant="h5"
                onClick={() => {
                  navigate("/contact");
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Contact
              </Typography>
            </Box>

            <IconButton
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={toggleDrawer}
            >
              <MenuOutlined
                sx={{
                  color: "#000",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
      <InbestDrawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
      <Divider
        sx={{
          width: "calc(100% + 160px)",
          marginLeft: "-160px",
          borderColor: "#0E0E0E",
        }}
      />
    </Box>
  );
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default InbestNavbar;
