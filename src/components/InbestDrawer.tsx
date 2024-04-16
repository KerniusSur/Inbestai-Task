import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DrawerHeader } from "../layouts/PublicLayout";

interface InbestDrawerProps {
  isDrawerOpen: boolean;
  drawerWidth: number;
  toggleDrawer: () => void;
}

const InbestDrawer = (props: InbestDrawerProps) => {
  const { isDrawerOpen, drawerWidth, toggleDrawer } = props;

  return (
    <Drawer
      open={isDrawerOpen}
      anchor="right"
      variant="temporary"
      onClose={toggleDrawer}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader
        sx={{
          paddingTop: "16px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <CloseRounded />
        </IconButton>
      </DrawerHeader>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          padding: "24px 0px",
          height: "24px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "24px 0px",
        }}
      >
        <DrawerContent />
      </Box>
    </Drawer>
  );
};

interface DrawerContentProps {}

const DrawerContent = (props: DrawerContentProps) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "24px 0px",
      }}
    >
      <Box
        component={Button}
        onClick={() => navigate("/postcode/create")}
        sx={{
          borderRadius: "0px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          {/* <AddToPhotosRounded />
          <Typography variant="body1">Add new postcode</Typography> */}
        </Box>
      </Box>
      <Box
        onClick={() => navigate("/postcode/history")}
        sx={{
          borderRadius: "0px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        {/* <Typography variant="body1">History</Typography> */}
      </Box>
    </Box>
  );
};

export const ListNoteItem = styled(ListItem)(({ theme }) => {
  return {
    boxSizing: "border-box",
    padding: "0px",
    paddingRight: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  };
});

export default InbestDrawer;
