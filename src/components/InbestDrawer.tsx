import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navbarNavigationItems } from "../components/InbestNavbar";

interface InbestDrawerProps {
  isDrawerOpen: boolean;
  drawerWidth: number;
  toggleDrawer: () => void;
}

const InbestDrawer = (props: InbestDrawerProps) => {
  const { isDrawerOpen, drawerWidth, toggleDrawer } = props;
  const navigate = useNavigate();
  return (
    <InbestDrawerStyled
      open={isDrawerOpen}
      anchor="right"
      variant="temporary"
      drawerWidth={drawerWidth}
      onClose={toggleDrawer}
    >
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
          <CloseRoundedIcon />
        </IconButton>
      </DrawerHeader>

      <ListContainer>
        {navbarNavigationItems.map((item) => (
          <ListItemButtonStyled
            key={item.path}
            onClick={() => {
              navigate(item.path);
              toggleDrawer();
            }}
          >
            <Typography variant="h5">{item.label}</Typography>
          </ListItemButtonStyled>
        ))}
      </ListContainer>
    </InbestDrawerStyled>
  );
};

export const InbestDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "drawerWidth",
})<{ drawerWidth: number }>(({ drawerWidth }) => ({
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  width: drawerWidth,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

const DrawerHeader = styled(Box)({
  display: "flex",
  padding: "16px",
  boxSizing: "border-box",
});

const CloseRoundedIcon = styled(CloseRounded)({
  color: "secondary.main",
  width: "24px",
  height: "24px",
});

const ListContainer = styled(List)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "0",
});

const ListItemButtonStyled = styled(ListItemButton)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  boxSizing: "border-box",
});

export default InbestDrawer;
