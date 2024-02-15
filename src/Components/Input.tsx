import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import AddCircleIcon from "@mui/icons-material/AddCircle";

type InputProp = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Input({ text, setText, handleSubmit }: InputProp) {
  return (
    <Box
      sx={{
        marginTop: "30px",
      }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
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
              <AddCircleIcon sx={{ mr: 1, cursor: "pointer" }} />
            </InputAdornment>
          ),
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Box>
  );
}

export default Input;
