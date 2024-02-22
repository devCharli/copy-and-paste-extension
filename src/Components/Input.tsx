import { Tooltip, Box, TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState } from "react";

type InputProp = {
  addItem: (text: string) => void;
};

function Input({ addItem }: InputProp) {
  const [text, setText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(text);
    setText("");
  };

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
        onChange={handleChange}
      />
    </Box>
  );
}

export default Input;
