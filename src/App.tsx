import { useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import { v4 as uuidv4 } from "uuid";
import CopyList from "./Components/List";
import { CssBaseline, Snackbar } from "@mui/material";
import EditInput from "./Components/EditInput";

export type listProp = {
  text: string;
  id: string;
};

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<listProp[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [editItemText, setEditItemText] = useState("");

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
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setShowToast(true);
  };

  const startEdit = (id: string) => {
    const item = list.find((item) => item.id === id);
    if (item) {
      setEditItemId(id);
      setEditItemText(item.text);
      setIsEdit(true);
    }
  };

  const addEditedTextToList = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();

    const newText = editItemText ?? "";
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setList(newList);
    setIsEdit(false);
  };

  const deleteText = (id: string) => {
    if (confirm("Do you really want to delete this?")) {
      const newList = [...list].filter((item) => item.id !== id);
      setList(newList);
    }
  };

  return (
    <>
      <CssBaseline />

      <main className="max-w-md p-4">
        <Navbar />
        <Input text={text} setText={setText} handleSubmit={addTextToList} />
        <Snackbar
          open={showToast}
          autoHideDuration={1000}
          message="Copied"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={() => setShowToast(false)}
          ContentProps={{
            sx: {
              backgroundColor: "#4caf50",
              color: "#fff",
            },
          }}
        />
        {list.map((listItem) =>
          editItemId === listItem.id && isEdit ? (
            <EditInput
              key={listItem.id}
              text={editItemText}
              setText={setEditItemText}
              id={listItem.id}
              onHandleSubmit={addEditedTextToList}
            />
          ) : (
            <CopyList
              key={listItem.id}
              listItem={listItem}
              onHandleCopy={copyText}
              onHandleDelete={deleteText}
              onHandleEdit={() => startEdit(listItem.id)}
            />
          )
        )}
      </main>
    </>
  );
}

export default App;
