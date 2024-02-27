import Snackbar from "@mui/material/Snackbar";

type ToastProp = {
  isOpen: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toast({ isOpen, setShowToast }: ToastProp) {
  const handleClose = () => {
    setShowToast(false);
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={1000}
      message="Copied"
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handleClose}
      ContentProps={{
        sx: {
          backgroundColor: "#4caf50",
          color: "#fff",
        },
      }}
    />
  );
}

export default Toast;
