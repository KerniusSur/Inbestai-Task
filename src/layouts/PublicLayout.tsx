import { Box, styled } from "@mui/material";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import InbestFooter from "../components/InbestFooter";
import InbestNavbar from "../components/InbestNavbar";

const drawerWidth = 320;

const PublicLayout = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <FlexBox>
      <PageContainer>
        <InbestNavbar
          isDrawerOpen={isDrawerOpen}
          drawerWidth={drawerWidth}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
        <InbestFooter
          showBottomShape={
            location.pathname === "/404" || location.pathname === "/404/"
          }
        />
      </PageContainer>
    </FlexBox>
  );
};
export const FlexBox = styled(Box)({
  display: "flex",
  height: "100%",
});

export const PageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  boxSizing: "border-box",
  padding: "3rem 2.5rem 6rem 2.5rem",
  [theme.breakpoints.down("lg")]: {
    padding: "2.5rem 2rem 5rem 2rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2rem 1.5rem 4rem 1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem 1rem 3rem 1rem",
  },
}));

export default PublicLayout;
