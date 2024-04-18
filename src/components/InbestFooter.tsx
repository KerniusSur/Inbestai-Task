import { Container, Paper, Typography } from "@mui/material";
import ElementorBottomShape from "../assets/inbest-bottom-shape.svg";
import InbestExerciseHorizontalLogo from "../assets/inbest-exercise-horizontal-logo.svg";
import { useLocation } from "react-router-dom";

const InbestFooter = () => {
  const location = useLocation();
  const showBottomShape =
    location.pathname === "/404" || location.pathname === "/404/";
  return (
    <Paper
      square
      component="footer"
      variant={!showBottomShape ? "outlined" : "elevation"}
      sx={{
        borderTop: showBottomShape ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "none",
        width: "calc(100% - 2px)",
      }}
    >
      {showBottomShape && (
        <img src={ElementorBottomShape as any} alt="Elementor Bottom Shape" />
      )}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 3rem !important",
          boxSizing: "border-box",
          maxWidth: "1600px !important",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h6" textAlign="center">
          Copyright © {new Date().getFullYear()}. Kernius Survila. All rights
          reserved.
        </Typography>

        <img src={InbestExerciseHorizontalLogo as any} width={160} alt="Logo" />
      </Container>
    </Paper>
  );
};

export default InbestFooter;
