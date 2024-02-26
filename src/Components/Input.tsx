import { Tooltip, Box, TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useEffect, useRef, useState } from "react";

type InputProp = {
  addItem?: (text: string) => void;
  editItem?: (text: string) => void;
  currentText?: string;
};

function Input({ addItem, editItem, currentText }: InputProp) {
  const [text, setText] = useState(currentText ? currentText : "");
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    currentText ? editItem?.(text) : addItem?.(text);
    setText("");
  };

  return (
    <Box
      sx={{
        margin: currentText ? "10px" : "30px 0px",
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
        label={currentText ? "" : "Add Text"}
        variant="outlined"
        inputRef={textFieldRef}
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
