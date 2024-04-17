import { Box, styled, Typography } from "@mui/material";
import PostCodeContent from "models/postcode/PostCodeContent";
import { ChangeEvent, useEffect, useState } from "react";
import InbestBackgroundInteractiveWidget from "../components/InbestBackgroundInteractiveWidget";
import InbestButton from "../components/InbestButton";
import InbestInput from "../components/InbestInput";
import { InbestPostcodeCardTransitionGroup } from "../components/InbestPostcodeTransitionGroup";
import { useAppSelector } from "../hooks/reduxHooks";
import postcodes from "../store/postcodes";

const HomePage = () => {
  const postCodeState = useAppSelector((state) => state.postcodes);
  const [postcode, setPostcode] = useState<string>("");
  const [postcodeList, setPostcodeList] = useState<PostCodeContent[]>(
    postCodeState.postcodes
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  useEffect(() => {
    setPostcodeList(postCodeState.postcodes);
    setPostcode("");
  }, [postCodeState.postcodes]);

  const handleSearch = () => {
    postcodes.lookup(postcode);
  };

  return (
    <>
      <HomePageContainer>
        <HomePageSearchContainer
          sx={{
            flex: postcodeList.length > 0 ? 1 : 2,
            transition: "flex .4s",
          }}
        >
          <Typography
            sx={{
              alignSelf: "flex-start",
              paddingBottom: "1rem",
            }}
            variant="h4"
          >
            Search UK Postcodes
          </Typography>
          <InbestInput
            value={postcode}
            name="firstName"
            fullWidth
            placeholder="Enter a postcode..."
            onChange={handleChange}
            onEnterKeyPress={handleSearch}
          />
          <InbestButton
            fullWidth
            disabled={postcode.length === 0}
            sx={{
              marginTop: "auto",
            }}
            variant="outlined"
            text="Search"
            onClick={() => {
              handleSearch();
            }}
          />
        </HomePageSearchContainer>
        <InbestPostcodeCardTransitionGroup postcodes={postcodeList} />
      </HomePageContainer>
      <InbestBackgroundInteractiveWidget />
    </>
  );
};

export const HomePageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  boxSizing: "border-box",
  maxWidth: "1600px",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  gap: "4rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "2rem",
  },
}));

export const HomePageSearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
  boxShadow: "4px 10px 10px 2px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderRadius: "1rem",
  padding: "2rem",
  boxSizing: "border-box",
  backgroundColor: "white",
  height: "fit-content",
  [theme.breakpoints.down("md")]: {
    flex: 0,
  },
}));

export default HomePage;
