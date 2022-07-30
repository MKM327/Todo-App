import InputArea from "./InputArea";
import TodoContent from "./TodoContent";
import { TodoProvider } from "../Contexts/TodoContext";
import Header from "./Header";
import { useState } from "react";
import Theme from "./Theme";
import useTheme from "../Hooks/useTheme";
import SaveMenu from "./SaveMenu/SaveMenu";
const App = () => {
  // const { addData, todoData, deleteData, updateData } = TodoHook();
  const [desc, setDesc] = useState("");
  const { theme, setTheme } = useTheme();
  return (
    <TodoProvider desc={desc}>
      <div className={theme == "light" ? "wrapper" : "wrapper-dark"}>
        <Theme setTheme={setTheme} />
        <SaveMenu />
        <div className="container">
          <Header />
          <InputArea desc={desc} setDesc={setDesc} />
          <TodoContent />
        </div>
      </div>
    </TodoProvider>
  );
};
export default App;
