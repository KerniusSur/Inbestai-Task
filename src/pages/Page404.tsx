import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InbestButton from "../components/InbestButton";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Oops, this page could not be found!</Typography>
      <InbestButton
        sx={{
          marginTop: "2rem",
        }}
        variant="outlined"
        text="Go home"
        onClick={() => {
          navigate("/");
        }}
      />
    </Box>
  );
};

export default Page404;
