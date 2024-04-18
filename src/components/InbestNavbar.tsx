import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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

  const theme = useTheme();
  const navigate = useNavigate();
  const isBelowMd = useMediaQuery("(max-width: 768px)");

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
          padding: "1rem 6rem 1rem 2rem",
          [theme.breakpoints.between("md", "sm")]: {
            padding: "1rem 4rem 1rem 1rem",
          },
          [theme.breakpoints.between("sm", "xs")]: {
            padding: "1rem 2rem 1rem 1rem",
          },
          [theme.breakpoints.down("xs")]: {
            padding: "1rem ",
          },
          transition: "padding .5s",
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
                <NavBarTextButton
                  key={item.path}
                  variant="h5"
                  isHeaderMinimized={isHeaderMinimized}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.label}
                </NavBarTextButton>
              ))}
            </Box>
          </Hidden>
          {isBelowMd && (
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
          )}
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

const NavBarTextButton = styled(Typography)(
  ({ isHeaderMinimized }: { isHeaderMinimized?: boolean }) =>
    ({ theme }) => ({
      cursor: "pointer",
      display: "inline-block",
      textDecoration: "none",

      "&:after": {
        content: '""',
        display: "block",
        width: 0,
        height: "2px",
        background: isHeaderMinimized
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
        transition: "width .3s ease-in-out",
      },

      transition: "opacity .2s ease-in-out",
      "&:hover": {
        opacity: 0.8,
        "&:after": {
          width: "100%",
        },
      },
    })
);

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
