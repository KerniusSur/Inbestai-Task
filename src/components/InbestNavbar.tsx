import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Box, Hidden, IconButton, Typography } from "@mui/material";
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
        setIsHeaderMinimized(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="sticky"
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

          <Hidden mdDown>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
              }}
            >
              {navbarNavigationItems.map((item) => (
                <Typography
                  key={item.path}
                  variant="h5"
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Hidden>

          <Hidden mdUp>
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
                  color: "secondary.main",
                }}
              />
            </IconButton>
          </Hidden>
        </Box>
      </Box>
      <InbestDrawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
    </AppBar>
  );
};

export interface NavbarNavigationItem {
  label: string;
  path: string;
}

export const navbarNavigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "404",
    path: "/non-existent-route",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default InbestNavbar;
