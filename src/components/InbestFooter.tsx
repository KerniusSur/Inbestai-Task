import { Container, Paper, Typography } from "@mui/material";
import ElementorBottomShape from "../assets/inbest-bottom-shape.svg";
import InbestExerciseHorizontalLogo from "../assets/inbest-exercise-horizontal-logo.svg";

interface InbestFooterProps {
  showBottomShape?: boolean;
}

const InbestFooter = (props: InbestFooterProps) => {
  const { showBottomShape } = props;
  return (
    <Paper
      square
      variant={!showBottomShape ? "outlined" : "elevation"}
      sx={{
        border: showBottomShape ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "none",
      }}
    >
      {showBottomShape && (
        <img
          src={ElementorBottomShape as any}
          alt="Elementor Bottom Shape"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        />
      )}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 3rem !important",
          boxSizing: "border-box",
          maxWidth: "1400px",
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
