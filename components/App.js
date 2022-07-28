import InputArea from "./InputArea";
import TodoContent from "./TodoContent";
import { TodoProvider } from "../Contexts/TodoContext";
import Header from "./Header";
import { useState } from "react";

const App = () => {
  // const { addData, todoData, deleteData, updateData } = TodoHook();
  const [desc, setDesc] = useState("");
  return (
    <TodoProvider>
      <div className="container">
        <Header />
        <InputArea desc={desc} setDesc={setDesc} />
        <TodoContent />
      </div>
    </TodoProvider>
  );
};
export default App;
