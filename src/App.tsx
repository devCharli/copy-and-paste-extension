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
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    text: string
  ) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopyTooltipText("Copied");
    setTimeout(() => setCopyTooltipText("Click to copy"), 1000);
  };

  return (
    <main className="max-w-md p-4">
      <Navbar />
      <Input text={text} setText={setText} handleSubmit={addTextToList} />

      <CopyList
        list={list}
        copyTooltipText={copyTooltipText}
        handleOnClick={copyText}
      />
    </main>
  );
}

export default App;
