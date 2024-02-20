import { Box, TextField, InputAdornment, Tooltip } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

type EditInputProps = {
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>, id: string) => void;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  id: string;
};

function EditInput({ text, setText, onHandleSubmit, id }: EditInputProps) {
  return (
    <Box
      sx={{
        marginTop: "30px",
      }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => onHandleSubmit(e, id)}
    >
      <TextField
        sx={{
          width: "100%",
        }}
        id="outlined-basic"
        label="Edit Text"
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

export default EditInput;
