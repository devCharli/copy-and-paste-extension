import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type TipModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function TipModal({ isOpen, onClose }: TipModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: "relative",
        width: 400,
      }}
    >
      <Box sx={style}>
        <IconButton
          onClick={onClose}
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
