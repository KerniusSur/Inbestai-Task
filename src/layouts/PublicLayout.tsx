import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import InbestFooter from "../components/InbestFooter";
import InbestNavbar from "../components/InbestNavbar";

const drawerWidth = 300;

const PublicLayout = () => {
  return (
    <FlexBox>
      <PageContainer>
        <InbestNavbar drawerWidth={drawerWidth} />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
        <InbestFooter />
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
  minWidth: theme.breakpoints.values.xs,
}));

export const PageInnerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  boxSizing: "border-box",
  maxWidth: "1600px",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  gap: "4rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "2rem",
  },
}));

export default PublicLayout;
