import { Box, Collapse, styled, Typography, useTheme } from "@mui/material";
import PostCodeContent from "models/postcode/PostCodeContent";
import { ChangeEvent, useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import InbestBackgroundWidget from "../components/InbestBackgroundWidget";
import InbestButton from "../components/InbestButton";
import InbestCard from "../components/InbestCard";
import InbestInput from "../components/InbestInput";
import { useAppSelector } from "../hooks/reduxHooks";
import postcodes from "../store/postcodes";
import toast from "../store/toast";
import { PageInnerContainer } from "../layouts/PublicLayout";

const HomePage = () => {
  const postCodeState = useAppSelector((state) => state.postcodes);
  const theme = useTheme();
  const [postcode, setPostcode] = useState<string>("");
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const [postcodeList, setPostcodeList] = useState<PostCodeContent[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  useEffect(() => {
    const postCodeList = postCodeState.postcodes ?? [];
    setPostcodeList(postCodeList);
    setPostcode("");
    if (postCodeList.length > 0) {
      if (postCodeList.length > 5) {
        setExpandedCards([postCodeState.postcodes[0].id]);
        return;
      }

      setExpandedCards((prev) => [...prev, postCodeState.postcodes[0].id]);
    }
  }, [postCodeState.postcodes]);

  const handleSearch = () => {
    postcodes.lookup(postcode);
  };

  const handleExpandClick = (id: string) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((cardIndex) => cardIndex !== id));
      return;
    }
    setExpandedCards([...expandedCards, id]);
  };

  return (
    <PageInnerContainer>
      <InbestBackgroundWidget />
      <HomePageSearchContainer
        sx={{
          flex: postcodeList.length > 0 ? 1 : 2,
          transition: "flex .4s ease-in-out",
        }}
      >
        <Typography
          sx={{
            alignSelf: "flex-start",
            paddingBottom: "1rem",
            [theme.breakpoints.down("md")]: {
              paddingBottom: "0",
            },
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
      <Box
        sx={{
          flex: postcodeList.length > 0 ? 2 : 0.001,
          transition: "flex 1s",
        }}
      >
        <TransitionGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          {postcodeList.map((postcode) => (
            <Collapse key={postcode.id} timeout={600} unmountOnExit>
              {renderItem(postcode, expandedCards, handleExpandClick)}
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </PageInnerContainer>
  );
};

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
    gap: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "1rem",
  },
}));

const renderItem = (
  postcode: PostCodeContent,
  expandedCards: string[],
  handleExpandClick: (id: string) => void
) => {
  const handleDelete = (postcode: PostCodeContent) => {
    postcodes.remove(postcode);
    toast.success("Postcode deleted successfully");
  };

  return (
    <InbestCard
      header={postcode.country}
      subheader={postcode.postcode}
      title={`Admin District:\n${postcode.adminDistrict}`}
      subtitle={`Latitude: ${postcode.latitude}\nLongitude: ${postcode.longitude}`}
      description={`Searched at:\n${new Date(
        postcode.createdAt
      ).toLocaleDateString("lt-LT", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}`}
      primaryButtonText="Delete"
      primaryButtonAction={() => handleDelete(postcode)}
      itemId={postcode.id}
      isExpanded={expandedCards.includes(postcode.id)}
      handleExpandClick={() => handleExpandClick(postcode.id)}
    />
  );
};

export default HomePage;
