import { useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input"; // Ensure this component correctly handles 'text', 'setText', and 'handleSubmit' props.
import { v4 as uuidv4 } from "uuid";
import CopyList from "./Components/List";

export type listProp = {
  text: string;
  id: string;
};

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<listProp[]>([]);
  const [copyTooltipText, setCopyTooltipText] = useState("Click to copy");

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
    setCopyTooltipText("Copied");
    setTimeout(() => setCopyTooltipText("Click to copy"), 1000);
  };

  const deleteText = (id: string) => {
    if (confirm("Do you really want to delete this?")) {
      const newList = [...list].filter((item) => item.id !== id);
      setList(newList);
    }
  };

  return (
    <main className="max-w-md p-4">
      <Navbar />
      <Input text={text} setText={setText} handleSubmit={addTextToList} />

      <CopyList
        list={list}
        copyTooltipText={copyTooltipText}
        onHandleCopy={copyText}
        onHandleDelete={deleteText}
      />
    </main>
  );
}

export default App;
