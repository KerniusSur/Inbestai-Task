import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import InbestButton from "./InbestButton";

interface InbestCardProps {
  header: string;
  subheader?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  isExpanded?: boolean;
  itemId?: string;
  handleExpandClick?: (itemId?: string) => void;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
}

const InbestCard = (props: InbestCardProps) => {
  const {
    header,
    subheader,
    title,
    subtitle,
    description,
    image,
    primaryButtonText,
    secondaryButtonText,
    isExpanded,
    itemId,
    handleExpandClick,
    primaryButtonAction,
    secondaryButtonAction,
  } = props;
  const theme = useTheme();
  return (
    <CardContainer>
      <CardHeader
        title={handleNewLine(header)}
        subheader={handleNewLine(subheader)}
        onClick={handleExpandClick}
        action={
          itemId && handleExpandClick ? (
            <IconButton
              onClick={() => handleExpandClick(itemId)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? <ExpandLessRounded /> : <ExpandMoreRounded />}
            </IconButton>
          ) : null
        }
        sx={{
          "&:hover": {
            cursor: itemId && handleExpandClick ? "pointer" : "default",
          },
        }}
      />
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        {image && (
          <CardMedia
            width={188}
            component="img"
            image={image}
            alt="card-media"
          />
        )}
        <CardContentContainer>
          <Typography variant="h5">{handleNewLine(title)}</Typography>
          <Typography variant="subtitle1">{handleNewLine(subtitle)}</Typography>
          <Typography
            variant="body2"
            sx={{
              padding: "1rem 0rem",
              [theme.breakpoints.up("sm")]: {
                padding: "1.5rem 0rem",
              },
            }}
          >
            {handleNewLine(description)}
          </Typography>
        </CardContentContainer>
        <CardActionsContainer
          sx={{
            justifyContent:
              primaryButtonText &&
              primaryButtonAction &&
              secondaryButtonText &&
              secondaryButtonAction
                ? "space-between"
                : "flex-end",
          }}
        >
          {secondaryButtonText && secondaryButtonAction && (
            <InbestButton
              text={secondaryButtonText}
              variant="outlined"
              fullWidth={false}
              onClick={secondaryButtonAction}
            />
          )}
          {primaryButtonText && primaryButtonAction && (
            <InbestButton
              text={primaryButtonText}
              variant="contained"
              fullWidth={false}
              onClick={primaryButtonAction}
            />
          )}
        </CardActionsContainer>
      </Collapse>
    </CardContainer>
  );
};

const CardContainer = styled(Card)({
  maxWidth: "360px",
  width: "100%",
  borderRadius: 16,
  minWidth: "100%",
  boxSizing: "border-box",
  boxShadow: "0px 10px 10px 2px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.15)",
});

const CardContentContainer = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",
});

const CardActionsContainer = styled(CardActions)(({ theme }) => ({
  display: "flex",
  padding: "0rem 1rem 1rem 1rem",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem 0.75rem 0.75rem 0.75rem",
  },
}));

export const handleNewLine = (text?: string) => {
  return text?.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

export default InbestCard;
