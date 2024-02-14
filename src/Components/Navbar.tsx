import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Tooltip } from "@mui/material";

function Navbar() {
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
                fontWeight: 700,
                letterSpacing: ".2rem",
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
            <DeleteSweepIcon sx={{ mr: 1, cursor: "pointer" }} />
          </Tooltip>
          <Tooltip title="Tip">
            <TipsAndUpdatesIcon sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
