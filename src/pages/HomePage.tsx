import { Box, Slide, Typography } from "@mui/material";
import PostCode from "models/postcode/PostCode";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createApi } from "../api/ApiCreator";
import { PostCodes } from "../api/PostCodes";
import InbestButton from "../components/InbestButton";
import InbestInput from "../components/InbestInput";
import alerts from "../store/alerts";
import { useAppSelector } from "../store/hooks";
import postcodes from "../store/postcodes";
import Alert from "../models/alert/Alert";

const HomePage = () => {
  const postCodeState = useAppSelector((state) => state.postcodes);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const postCodeApi = useRef(createApi() as PostCodes);

  const [postcode, setPostcode] = useState<string>("");
  const [codes, setCodes] = useState<PostCode[]>(postCodeState.postcodes);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  useEffect(() => {
    setCodes(postCodeState.postcodes);
  }, [postCodeState.postcodes]);

  const handleSearch = async (newPostcode: string) => {
    const response = await postCodeApi.current.lookup(newPostcode);

    if (response === null) {
      const newAlert: Alert = {
        id: uuidv4(),
        message: "Failed to fetch postcode data",
        severity: "error",
        createdAt: new Date().toISOString(),
      };

      alerts.addAlert(newAlert);
      console.log("HomePgae, ", newAlert);
      return;
    }

    const newPostCode: PostCode = {
      id: uuidv4(),
      postcode: response.result.postcode,
      country: response.result.country,
      longitude: response.result.longitude.toString(),
      latitude: response.result.latitude.toString(),
      adminDistrict: response.result.admin_district,
      createdAt: new Date().toISOString(),
    };

    postcodes.add(newPostCode);
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
        zIndex: 100,
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
          zIndex: 100,
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
          sx={{
            marginTop: "1rem",
            maxWidth: "200px",
          }}
          fullWidth={false}
          variant="outlined"
          text="Search"
          onClick={() => {
            handleSearch(postcode);
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          zIndex: 3,
          width: "100%",
        }}
      >
        {codes.map((code, index) => (
          <Slide
            key={code.id}
            in={true}
            unmountOnExit
            container={inputContainerRef.current}
            timeout={1200}
            style={{
              zIndex: 0,
            }}
          >
            <Box
              key={code.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1rem",
                boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.19)",
                borderRadius: "16px",
              }}
            >
              <Typography variant="h6">{code.postcode}</Typography>
              <Typography variant="body1">{code.adminDistrict}</Typography>
              <Typography variant="body1">{code.country}</Typography>
              <Typography variant="body1">
                {code.latitude}, {code.longitude}
              </Typography>
            </Box>
          </Slide>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
