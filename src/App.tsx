import { useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input"; // Ensure this component correctly handles 'text', 'setText', and 'handleSubmit' props.
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
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
  const [copyTooltipText, setcopyTooltipText] = useState("Click to copy");

  const addTextToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTextItem = {
      id: uuidv4(),
      text: text,
    };
    setList((prev) => [...prev, newTextItem]);
    setText(""); // Clear input after adding
  };

  const copyText = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    text: string
  ) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setcopyTooltipText("Copied");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 500);
  };

  return (
    <main className="max-w-md p-4">
      <Navbar />
      <Input text={text} setText={setText} handleSubmit={addTextToList} />
      <List>
        {list.map((listItem) => (
          <Tooltip title={copyTooltipText} key={listItem.id}>
            <ListItem
              style={{ padding: "0" }}
              onClick={(e) => copyText(e, listItem.text)}
              disableGutters
              secondaryAction={
                <Tooltip title={copyTooltipText}>
                  <Box>
                    <Tooltip title="Edit">
                      <IconButton aria-label="Edit">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Tooltip>
              }
            >
              <ListItemButton>
                <ListItemText>{listItem.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </main>
  );
}

export default App;
