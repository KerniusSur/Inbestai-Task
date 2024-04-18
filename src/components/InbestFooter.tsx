import { Box, Container, styled, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ElementorBottomShape from "../assets/inbest-bottom-shape.svg";
import InbestExerciseHorizontalLogo from "../assets/inbest-exercise-horizontal-logo.svg";

const InbestFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showBottomShape =
    location.pathname === "/404" || location.pathname === "/404/";

  return (
    <FooterPaper showBottomShape={showBottomShape}>
      {showBottomShape && (
        <img src={ElementorBottomShape as any} alt="Elementor Bottom Shape" />
      )}
      <FooterContainer>
        <Typography variant="body2" textAlign="center">
          Copyright © {new Date().getFullYear()}. Kernius Survila.
        </Typography>
        <Box
          sx={{
            cursor: "pointer",
            width: "160px",
          }}
          component={"img"}
          src={InbestExerciseHorizontalLogo as any}
          alt="inbest-exercise-logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </FooterContainer>
    </FooterPaper>
  );
};

const FooterPaper = styled("footer", {
  shouldForwardProp: (prop) => prop !== "showBottomShape",
})<{ showBottomShape: boolean }>(({ showBottomShape }) => ({
  position: "relative",
  borderTop: showBottomShape ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
  boxShadow: "none",
  width: "calc(100% - 2px)",
}));

const FooterContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 3rem !important",
  boxSizing: "border-box",
  maxWidth: "1600px !important",
  gap: "1rem",
  flexWrap: "wrap",
});

export default InbestFooter;
