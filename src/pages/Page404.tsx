import { Box, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InbestButton from "../components/InbestButton";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <Page404Container>
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
    </Page404Container>
  );
};

const Page404Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  height: "100%",
  justifyContent: "center",
});

export default Page404;
