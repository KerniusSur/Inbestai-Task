import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
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
    <Drawer
      open={isDrawerOpen}
      anchor="right"
      variant="temporary"
      onClose={toggleDrawer}
      sx={{
        display: "flex",
        flexDirection: "column",

        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <CloseRounded
            sx={{
              color: "secondary.main",
              width: "24px",
              height: "24px",
            }}
          />
        </IconButton>
      </Box>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        {navbarNavigationItems.map((item) => (
          <ListItemButton
            key={item.path}
            onClick={() => {
              navigate(item.path);
              toggleDrawer();
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "1rem",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h5">{item.label}</Typography>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default InbestDrawer;
