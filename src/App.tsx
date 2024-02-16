import { useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import { v4 as uuidv4 } from "uuid";
import {
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type listProp = {
  text: string;
  id: string;
};

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<listProp[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  const addTextToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTextItem = {
      id: uuidv4(),
      text: text,
    };
    setList((prev) => [...prev, newTextItem]);
    setText("");
  };

  const copyText = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    text: string
  ) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <main className="max-w-md p-4">
      <Navbar />
      <Input text={text} setText={setText} handleSubmit={addTextToList} />
      {list &&
        list.map((listItem) => (
          <List key={listItem.id}>
            <Tooltip title="Click to copy">
              <ListItem
                style={{ padding: "0" }}
                onClick={(e) => copyText(e, listItem.text)}
              >
                <TextField
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                  }}
                  id={`outlined-basic-${listItem.id}`}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("Edit clicked");
                          }}
                        >
                          <EditIcon sx={{ mr: 1 }} />
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("Delete clicked");
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label={isCopied ? "copied" : ""}
                  value={listItem.text}
                  InputLabelProps={{ style: { color: "#333" } }}
                  inputProps={{
                    readOnly: true,
                  }}
                  onClick={() => console.log("clicked")}
                />
              </ListItem>
            </Tooltip>
          </List>
        ))}
    </main>
  );
}

export default App;
