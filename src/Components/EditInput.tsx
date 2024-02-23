import { Box, TextField, InputAdornment, Tooltip } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useEffect, useRef, useState } from "react";

type EditInputProps = {
  editItem: (text: string) => void;
  currentText: string;
};

function EditInput({ editItem, currentText }: EditInputProps) {
  const [text, setText] = useState(currentText);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editItem(text);
    setText("");
  };

  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "10px",
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

export default EditInput;
