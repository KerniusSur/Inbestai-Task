import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import InbestBackgroundWidget from "../components/InbestBackgroundWidget";
import InbestButton from "../components/InbestButton";
import InbestCard from "../components/InbestCard";
import InbestInput from "../components/InbestInput";
import { useAppSelector } from "../hooks/reduxHooks";
import { PageInnerContainer } from "../layouts/PublicLayout";
import PostCodeContent from "../models/postcode/PostCodeContent";
import postcodes from "../store/postcodes";
import toast from "../store/toast";

const HomePage = () => {
  const theme = useTheme();
  const postcodeState = useAppSelector((state) => state.postcodes);

  const [postcode, setPostcode] = useState<string>("");
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const [postcodeList, setPostcodeList] = useState<PostCodeContent[]>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  const handleSetPostcode = (postcode: string) => {
    setIsSuggestionsOpen(false);
    postcodes.lookup(postcode);
  };

  useEffect(() => {
    const newPostcodeList = postcodeState.postcodes ?? [];
    if (newPostcodeList.length > postcodeList.length) {
      setPostcode("");
      setIsSuggestionsOpen(false);
    }
    setPostcodeList(newPostcodeList);

    if (newPostcodeList.length > 0) {
      if (newPostcodeList.length > 5) {
        setExpandedCards([postcodeState.postcodes[0].id]);
        return;
      }

      setExpandedCards((prev) => [...prev, postcodeState.postcodes[0].id]);
    }
  }, [postcodeList.length, postcodeState.postcodes]);

  useEffect(() => {
    setIsSuggestionsOpen(postcodeState.suggestions.length > 0);
  }, [postcodeState.suggestions]);

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
    <PageInnerContainer
      sx={{
        gap: postcodeState.postcodes.length > 0 ? "2rem" : "0",
      }}
    >
      <InbestBackgroundWidget />
      <HomePageSearchContainer
        sx={{
          flex: postcodeList.length > 0 ? 1 : 2,
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
          variant="outlined"
          text="Search"
          sx={{
            marginTop: postcodeState.suggestions.length > 0 ? "0" : "auto",
          }}
          onClick={() => {
            handleSearch();
          }}
        />
        <Collapse
          in={isSuggestionsOpen}
          timeout={800}
          unmountOnExit
          onExited={() => {
            postcodes.clearSuggestions();
          }}
        >
          <Divider
            sx={{
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          />
          <SuggestionsContainer>
            <SuggestionsTitleContainer>
              <Typography variant="h4" fontWeight={600}>
                Suggestions
              </Typography>
              <IconButton
                onClick={() => {
                  setIsSuggestionsOpen(false);
                }}
              >
                <CloseRounded color="secondary" />
              </IconButton>
            </SuggestionsTitleContainer>
            <SuggestionsInnerContainer>
              {postcodeState.suggestions.map((suggestion) => (
                <SuggestionOptionContainer
                  key={suggestion}
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      flex: postcodeList.length === 0 && "0 calc(25% - 1rem)",
                    },
                  }}
                  onClick={() => handleSetPostcode(suggestion)}
                >
                  <Typography variant="h6">{suggestion}</Typography>
                </SuggestionOptionContainer>
              ))}
            </SuggestionsInnerContainer>
          </SuggestionsContainer>
        </Collapse>
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
              {renderPostcodeItem(postcode, expandedCards, handleExpandClick)}
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </PageInnerContainer>
  );
};

const HomePageSearchContainer = styled(Box)(({ theme }) => ({
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
  transition: "flex .4s ease-in-out",
  [theme.breakpoints.down("md")]: {
    flex: 0,
    gap: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "1rem",
  },
}));

const SuggestionsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: "1rem",
  boxSizing: "border-box",
  transition: "border 1s, boxShadow 1s, flex 1s",
  paddingBottom: "1rem",
});

const SuggestionsTitleContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const SuggestionsInnerContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "0.5rem",
  gap: "0.5rem",
});

const SuggestionOptionContainer = styled(Box)({
  display: "flex",
  flex: "1 calc(50% - 1rem)",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid rgba(0, 0, 0, 0.45)",
  padding: "0.5rem",
  boxSizing: "border-box",
  borderRadius: "1rem",
  width: "100%",
  cursor: "pointer",
  transition: "background-color .2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

const renderPostcodeItem = (
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
