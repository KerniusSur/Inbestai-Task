import { DeleteRounded } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import InbestCard from "./InbestCard";
import PostCodeContent from "models/postcode/PostCodeContent";
import { TransitionGroup } from "react-transition-group";
import postcodes from "../store/postcodes";

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

interface InbestPostcodeCardTransitionGroupProps {
  postcodes: PostCodeContent[];
}

export const InbestPostcodeCardTransitionGroup = (
  props: InbestPostcodeCardTransitionGroupProps
) => {
  const { postcodes: postCodeComponents } = props;
  const handleDelete = (postcode: PostCodeContent) => {
    postcodes.remove(postcode);
  };

  const handleView = (postcode: PostCodeContent) => {
    console.log(postcode);
  };

  console.log(postCodeComponents);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <TransitionGroup
        component={TransitionGrid}
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        {postCodeComponents.map((postcode) => (
          <Collapse key={postcode.id} timeout={800} component={Item}>
            <InbestCard
              header={postcode.postcode || ""}
              subheader="Admin District"
              title={postcode.adminDistrict || ""}
              subtitle="Country"
              description={postcode.country || ""}
              handleDelete={() => handleDelete(postcode)}
              handleView={() => handleView(postcode)}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </Box>
  );
};

const TransitionGrid = ({ children }: { children: any }) => (
  <Grid
    container
    direction={"row"}
    spacing={3}
    columns={3}
    wrap="wrap"
    rowGap={2}
    columnGap={2}
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
