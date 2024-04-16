import { DeleteRounded } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import PostCode from "models/postcode/PostCode";
import { TransitionGroup } from "react-transition-group";

interface InbestPostcodeTransitionGroupProps {
  postcodes: PostCode[];

  handleDelete: (postcode: PostCode) => void;
}

const InbestPostcodeTransitionGroup = (
  props: InbestPostcodeTransitionGroupProps
) => {
  const { postcodes, handleDelete } = props;

  return (
    <List sx={{ mt: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
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
              boxSizing: "border-box",
              boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.19)",
              borderRadius: "16px",
            }}
            timeout={800}
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

interface TransitionGroupListItemProps {
  postcode: PostCode;
  handleDelete: (postcode: PostCode) => void;
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
