import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  Hidden,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InbestExerciseLogo from "../assets/inbest-exercise-logo.svg";
import InbestDrawer from "../components/InbestDrawer";

interface InbestNavbarProps {
  drawerWidth: number;
}

const InbestNavbar = (props: InbestNavbarProps) => {
  const { drawerWidth } = props;

  const navigate = useNavigate();
  const isBelowMd = useMediaQuery("(max-width: 768px)");

  const [isHeaderMinimized, setIsHeaderMinimized] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const listenScrollEvent = useCallback(() => {
    setIsHeaderMinimized(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent]);

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
      <NavBarContainer>
        <NavBarInnerBox>
          <Box
            sx={{
              cursor: "pointer",
              height: "42px",
            }}
            component={"img"}
            src={InbestExerciseLogo as any}
            alt="inbest-exercise-logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <Hidden mdDown>
            <NavigationMenuBox>
              {navbarNavigationItems.map((item) => (
                <NavBarTextButton
                  key={item.path}
                  variant="h5"
                  isHeaderMinimized={isHeaderMinimized}
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    transition: "opacity .2s ease-in-out",
                  }}
                >
                  {item.label}
                </NavBarTextButton>
              ))}
            </NavigationMenuBox>
          </Hidden>
          {isBelowMd && (
            <IconButton onClick={toggleDrawer}>
              <MenuOutlined color="secondary" />
            </IconButton>
          )}
        </NavBarInnerBox>
      </NavBarContainer>
      <InbestDrawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
    </AppBar>
  );
};

const NavBarTextButton = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isHeaderMinimized",
})<{ isHeaderMinimized: boolean }>(({ theme, isHeaderMinimized }) => ({
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
  "&:hover": {
    opacity: 0.8,
    "&:after": {
      width: "100%",
    },
  },
}));

const NavBarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1600px !important",
  width: "100%",
  boxSizing: "border-box",
  padding: "1rem 3rem 1rem 3rem !important",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 2rem 1rem 1rem !important",
  },
}));

const NavBarInnerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "2rem",
});

const NavigationMenuBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "2.5rem",
});

export interface NavbarNavigationItem {
  label: string;
  path: string;
}

export const navbarNavigationItems: NavbarNavigationItem[] = [
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
