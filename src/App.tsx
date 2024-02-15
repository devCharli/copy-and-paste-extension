import { useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import { v4 as uuidv4 } from "uuid";

type listProp = {
  text: string;
  id: string;
};

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<listProp[]>([]);

  const addTextToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTextItem = {
      id: uuidv4(),
      text: text,
    };
    setList((prev) => [...prev, newTextItem]);
    setText("");
  };

  return (
    <main className="max-w-md p-4">
      <Navbar />
      <Input text={text} setText={setText} handleSubmit={addTextToList} />
    </main>
  );
}

export default App;
