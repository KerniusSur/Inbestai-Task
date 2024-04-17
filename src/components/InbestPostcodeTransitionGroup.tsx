import { DeleteRounded } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { default as Grid, default as Item } from "@mui/material/Unstable_Grid2";
import PostCodeContent from "models/postcode/PostCodeContent";
import { ReactNode, useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import postcodes from "../store/postcodes";
import InbestCard from "./InbestCard";

// TODO: Find a way to make this compnent reusable
interface InbestPostcodeTransitionGroupProps {
  postcodes: PostCodeContent[];

  handleDelete: (postcode: PostCodeContent) => void;
}

const InbestPostcodeTransitionGroup = (
  props: InbestPostcodeTransitionGroupProps
) => {
  const { postcodes, handleDelete } = props;

  return (
    <List
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <TransitionGroup
        component={Box}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {postcodes.map((postcode) => (
          <Collapse
            key={postcode.id}
            sx={{
              boxShadow: "4px 10px 10px 2px rgba(0, 0, 0, 0.1)",
              borderRadius: "1rem",
            }}
            timeout={100}
            unmountOnExit
          >
            <TransitionGroupListItem
              postcode={postcode}
              handleDelete={handleDelete}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
};

interface InbestPostcodeCardTransitionGroupProps {
  postcodes: PostCodeContent[];
}

export const InbestPostcodeCardTransitionGroup = (
  props: InbestPostcodeCardTransitionGroupProps
) => {
  const { postcodes: postCodeComponents } = props;
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  useEffect(() => {
    if (postCodeComponents.length > 0) {
      setExpandedCards((prev) => [...prev, postCodeComponents[0].id]);
    }
  }, [postCodeComponents]);

  const handleExpandClick = (id: string) => {
    console.log("handleExpandClick", id);
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((cardIndex) => cardIndex !== id));
      return;
    }
    setExpandedCards([...expandedCards, id]);
  };

  return (
    <Box
      sx={{
        flex: postCodeComponents.length > 0 ? 2 : 0.001,
        transition: "flex 1s",
      }}
    >
      <TransitionGroup
        component={TransitionGrid}
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        {postCodeComponents.map((postcode, index) => (
          <Collapse
            key={postcode.id}
            timeout={400}
            component={Item}
            sx={{
              width: "100%",
            }}
          >
            {renderItem(postcode, expandedCards, handleExpandClick)}
          </Collapse>
        ))}
      </TransitionGroup>
    </Box>
  );
};

const renderItem = (
  postcode: PostCodeContent,
  expandedCards: string[],
  handleExpandClick: (id: string) => void
) => {
  const handleDelete = (postcode: PostCodeContent) => {
    postcodes.remove(postcode);
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

const TransitionGrid = ({ children }: { children: ReactNode }) => (
  <Grid
    container
    wrap="wrap"
    direction={"row"}
    spacing={3}
    columns={3}
    rowGap={2}
    columnGap={2}
    sx={{
      display: "flex",
    }}
  >
    {children}
  </Grid>
);

interface TransitionGroupListItemProps {
  postcode: PostCodeContent;
  handleDelete: (postcode: PostCodeContent) => void;
}

const TransitionGroupListItem = ({
  postcode,
  handleDelete,
}: TransitionGroupListItemProps) => {
  return (
    <ListItem
      sx={{
        width: "100%",
        padding: "2rem",
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          sx={{
            marginRight: "1rem",
            color: "error.main",
          }}
          onClick={() => handleDelete(postcode)}
        >
          <DeleteRounded />
        </IconButton>
      }
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "60%",
          gap: "1rem",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            gap: "1rem",
          }}
        >
          <Typography variant="h4" fontSize={24} fontWeight={400}>
            Postcode:
            <b> {postcode.postcode}</b>
          </Typography>
          <Typography variant="body1">
            Admin District:
            <b> {postcode.adminDistrict}</b>
          </Typography>
          <Typography variant="body1">
            Country:
            <b> {postcode.country}</b>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography variant="body1">
            Latitude:
            <b> {postcode.latitude}</b>
          </Typography>
          <Typography variant="body1">
            Longitude:
            <b> {postcode.longitude}</b>
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default InbestPostcodeTransitionGroup;
