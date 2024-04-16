import { MoreVert } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import CardMediaPlaceholder from "../assets/card-media-placeholder.png";
import InbestButton from "./InbestButton";
import { palette } from "../theme/AppTheme";

interface InbestCardProps {
  header: string;
  subheader?: string;
  handleDelete?: () => void;
  handleView?: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

const InbestCard = (props: InbestCardProps) => {
  const {
    header,
    subheader,
    handleDelete,
    handleView,
    title,
    subtitle,
    description,
    image,
  } = props;

  return (
    <CardContainer>
      <CardHeader
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={header}
        subheader={subheader}
      />
      <CardMedia
        width={188}
        component="img"
        image={image ?? CardMediaPlaceholder}
        alt="card-media"
      />
      <CardContentContainer>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {subtitle}
        </Typography>
        <Typography
          variant="body2"
          color={palette.primary.contrastText}
          sx={{
            padding: "2rem 0rem",
          }}
        >
          {description}
        </Typography>
      </CardContentContainer>
      <CardActionsContainer
        hasHandleDelete={!!handleDelete}
        hasHandleView={!!handleView}
      >
        {handleDelete && (
          <InbestButton
            fullWidth={false}
            variant="outlined"
            text="Delete"
            onClick={handleDelete}
          />
        )}
        {handleView && (
          <InbestButton
            fullWidth={false}
            variant="contained"
            sx={{
              background: palette.text.primary,
              color: palette.primary.main,
              "&:hover": {
                background: palette.primary.dark,
                color: "#FFFFFF",
              },
            }}
            text="View"
            onClick={handleView}
          />
        )}
      </CardActionsContainer>
    </CardContainer>
  );
};

const CardContainer = styled(Card)({
  maxWidth: 360,
  width: "100%",
  borderRadius: 16,
});

const CardContentContainer = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const CardActionsContainer = styled(CardActions)(
  ({
    hasHandleDelete,
    hasHandleView,
  }: {
    hasHandleDelete: boolean;
    hasHandleView: boolean;
  }) => ({
    display: "flex",
    padding: "0rem 1rem 1rem 1rem",
    justifyContent:
      hasHandleDelete && hasHandleView ? "space-between" : "flex-end",
    alignItems: "center",
  })
);

export default InbestCard;
