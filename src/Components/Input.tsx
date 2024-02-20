import { Tooltip, Box, TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

type InputProp = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Input({ text, setText, handleSubmit }: InputProp) {
  return (
    <Box
      sx={{
        margin: "30px 0px",
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
              <Tooltip title="enter">
                <KeyboardReturnIcon sx={{ mr: 1, cursor: "pointer" }} />
              </Tooltip>
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
