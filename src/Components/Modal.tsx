import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "15%",
  right: "55%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "384px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type TipModalProps = {
  open: boolean;
  handleClose: () => void;
};

function TipModal({ open, handleClose }: TipModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{
            padding: "0",
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tip
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Your data will be saved in your browser's storage. If you are using a
          public computer, please delete all data before closing the browser.
          The 'Delete All' button is located next to the tip icon
        </Typography>
      </Box>
    </Modal>
  );
}

export default TipModal;
