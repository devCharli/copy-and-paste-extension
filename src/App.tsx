import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import CopyList from "./Components/List";
import Toast from "./Components/Toast";
import TipModal from "./Components/Modal";

export type itemProp = {
  text: string;
  id: string;
};

const getInitialData = (): itemProp[] => {
  const data = localStorage.getItem("itemList");
  return JSON.parse(data || "[]");
};

function App() {
  const [itemList, setItemList] = useState<itemProp[] | []>(getInitialData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditingItemId, SetCurrentEditingItemId] = useState<
    string | null
  >(null);
  const [currentEditingItemText, setCurrentEditingItemText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);

  const handleAddItem = (text: string) => {
    const newItem = {
      id: uuidv4(),
      text: text,
    };
    setItemList((prev) => [...prev, newItem]);
  };

  const handleCopyItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setShowToast(true);
  };

  const handleStartEditItem = (id: string) => {
    const item = itemList.find((item) => item.id === id);
    if (item) {
      SetCurrentEditingItemId(id);
      setCurrentEditingItemText(item.text);
      setIsEditing(true);
    }
  };

  const handleSaveEditItem = (text: string) => {
    const newList = itemList.map((item) => {
      if (item.id === currentEditingItemId) {
        return { ...item, text: text };
      }
      return item;
    });
    setItemList(newList);
    setIsEditing(false);
  };

  const handleDeleteItem = (id: string) => {
    if (confirm("Are you sure you want to delete this?")) {
      const newList = [...itemList].filter((item) => item.id !== id);
      setItemList(newList);
    }
  };

  const handleDeleteItemList = () => {
    if (confirm("Are you sure you want to delete all items?")) {
      setItemList([]);
    }
  };

  const toggleTipModal = () => setIsTipModalOpen((prev) => !prev);

  return (
    <>
      <CssBaseline />
      <main className="w-[500px] p-4 relative">
        <Navbar
          onDeleteAll={handleDeleteItemList}
          onToggleModal={toggleTipModal}
        />
        <Input addItem={handleAddItem} />
        <Toast isOpen={showToast} setShowToast={setShowToast} />
        <TipModal isOpen={isTipModalOpen} onClose={toggleTipModal} />
        {itemList.map((item) =>
          currentEditingItemId === item.id && isEditing ? (
            <Input
              key={item.id}
              currentText={currentEditingItemText}
              editItem={handleSaveEditItem}
              setIsEditing={setIsEditing}
            />
          ) : (
            <CopyList
              key={item.id}
              item={item}
              onHandleCopy={handleCopyItem}
              onHandleDelete={handleDeleteItem}
              onHandleEdit={() => handleStartEditItem(item.id)}
            />
          )
        )}
      </main>
    </>
  );
}

export default App;
