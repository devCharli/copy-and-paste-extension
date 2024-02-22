import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import { v4 as uuidv4 } from "uuid";
import CopyList from "./Components/List";
import { CssBaseline } from "@mui/material";
import EditInput from "./Components/EditInput";
import Toast from "./Components/Toast";
import React from "react";
import TipModal from "./Components/Modal";

export type listProp = {
  text: string;
  id: string;
};

const getInitialData = (): listProp[] => {
  const data = localStorage.getItem("list");
  return JSON.parse(data || "[]");
};

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<listProp[] | []>(getInitialData);
  const [showToast, setShowToast] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [editItemText, setEditItemText] = useState("");
  const [open, setOpen] = useState(false);
  const toggleTipModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
    if (confirm("Are you sure you want to delete this?")) {
      const newList = [...list].filter((item) => item.id !== id);
      setList(newList);
    }
  };

  const deleteAllList = () => {
    if (confirm("Are you sure you want to delete all items?")) {
      setList([]);
    }
  };

  return (
    <>
      <CssBaseline />
      <main className="w-[500px] p-4 relative">
        <Navbar onDeleteAll={deleteAllList} onToggleModal={toggleTipModal} />
        <Input text={text} setText={setText} handleSubmit={addTextToList} />
        <Toast openToast={showToast} onCloseToast={setShowToast} />
        <TipModal open={open} handleClose={handleClose} />
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
