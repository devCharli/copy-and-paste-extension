import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import InputAdornment from "@mui/material/InputAdornment";
import DeleteIcon from "@mui/icons-material/Delete";

function Input() {
  return (
    <Box
      sx={{
        marginTop: "30px",
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{
          width: "100%",
        }}
        id="outlined-basic"
        label="Add Text"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EditIcon sx={{ mr: 1, cursor: "pointer" }} />
              <DeleteIcon sx={{ cursor: "pointer" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Input;
