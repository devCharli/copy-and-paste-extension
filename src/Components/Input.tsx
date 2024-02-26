import { Tooltip, Box, TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useEffect, useRef, useState } from "react";

type InputProp = {
  addItem?: (text: string) => void;
  editItem?: (text: string) => void;
  currentText?: string;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
};

function Input({ addItem, editItem, currentText, setIsEditing }: InputProp) {
  const [text, setText] = useState(currentText || "");
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      const target = event.target as Node;

      if (textFieldRef.current && !textFieldRef.current.contains(target)) {
        setIsEditing?.(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [textFieldRef, setIsEditing]);

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
