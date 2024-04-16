import { Box, Typography } from "@mui/material";
import PostCodeContent from "models/postcode/PostCodeContent";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import InbestButton from "../components/InbestButton";
import InbestInput from "../components/InbestInput";
import InbestPostcodeTransitionGroup, {
  InbestPostcodeCardTransitionGroup,
} from "../components/InbestPostcodeTransitionGroup";
import { useAppSelector } from "../hooks/reduxHooks";
import postcodes from "../store/postcodes";

const HomePage = () => {
  const postCodeState = useAppSelector((state) => state.postcodes);
  const inputContainerRef = useRef<HTMLDivElement>(null);

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

  const handleDelete = (postcode: PostCodeContent) => {
    postcodes.remove(postcode);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: "1rem",
        marginTop: "6rem",
        marginBottom: "104px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: "100%",
          padding: "1.5rem 3rem",
          boxSizing: "border-box",
          boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.19)",
          borderRadius: "16px",
          backgroundColor: "background.paper",
          marginBottom: "4rem",
        }}
        ref={inputContainerRef}
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
        />
        <InbestButton
          disabled={postcode.length === 0}
          sx={{
            marginTop: "1rem",
            maxWidth: "200px",
          }}
          fullWidth={false}
          variant="outlined"
          text="Search"
          onClick={() => {
            handleSearch();
          }}
        />
      </Box>

      {/* <InbestPostcodeTransitionGroup
        postcodes={postcodeList}
        handleDelete={handleDelete}
      /> */}
      <InbestPostcodeCardTransitionGroup postcodes={postcodeList} />
    </Box>
  );
};

export default HomePage;
