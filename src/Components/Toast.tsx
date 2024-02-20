import { Snackbar } from "@mui/material";

type ToastProp = {
  openToast: boolean;
  onCloseToast: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toast({ openToast, onCloseToast }: ToastProp) {
  return (
    <Snackbar
      open={openToast}
      autoHideDuration={1000}
      message="Copied"
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={() => onCloseToast(false)}
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
