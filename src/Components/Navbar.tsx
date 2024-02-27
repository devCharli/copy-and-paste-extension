import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  IconButton,
  Tooltip,
} from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

type NavbarProp = {
  onDeleteAll: () => void;
  onToggleModal: () => void;
};

function Navbar({ onDeleteAll, onToggleModal }: NavbarProp) {
  return (
    <AppBar position="static">
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Toolbar disableGutters>
            <ContentCopyIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Easy Copy &amp; Paste
            </Typography>
          </Toolbar>
        </Box>
        <Box>
          <Tooltip title="Delete All">
            <IconButton
              onClick={onDeleteAll}
              sx={{ color: "#fff", padding: "0", mr: 1 }}
            >
              <DeleteSweepIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Tip">
            <IconButton
              onClick={onToggleModal}
              sx={{ color: "#fff", padding: "0" }}
            >
              <TipsAndUpdatesIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
