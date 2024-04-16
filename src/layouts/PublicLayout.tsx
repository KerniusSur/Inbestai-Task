import { Box, CssBaseline, styled } from "@mui/material";
import InbestNavbar from "../components/InbestNavbar";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import InbestFooter from "../components/InbestFooter";

const drawerWidth = 320;

const PublicLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const location = useLocation();

  return (
    <OutsideContainer>
      <CssBaseline />
      <InbestNavbar
        isDrawerOpen={isDrawerOpen}
        drawerWidth={drawerWidth}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <MainContainer open={isDrawerOpen}>
        <DrawerHeader
          sx={{
            minHeight: "56px !important",
          }}
        />
        <PaddingContainer>
          <Outlet />
        </PaddingContainer>
      </MainContainer>
      <InbestFooter
        showBottomShape={
          location.pathname === "/404" || location.pathname === "/404/"
        }
      />
    </OutsideContainer>
  );
};

export const OutsideContainer = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#fff",
  };
});

const MainContainer = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  height: "100%",
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  maxWidth: "100%",
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  position: "relative",
}));

export const PaddingContainer = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  padding: "1rem",
  width: "100%",
  height: "calc(100% - 80px)",
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // padding: theme.spacing(0, 1),
  minHeight: "80px !important",
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default PublicLayout;
