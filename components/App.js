import TodoContent from "./TodoContent";
import { TodoContext, TodoProvider } from "../Contexts/TodoContext";
import Header from "./Header";
import Theme from "./Theme";
import useTheme from "../Hooks/useTheme";
import SaveMenu from "./SaveMenu/SaveMenu";
import { useContext } from "react";
function AppNoProvider() {
  const { theme, setTheme } = useTheme();
  const { setMenuState } = useContext(TodoContext);
  return (
    <div className={theme == "light" ? "wrapper" : "wrapper-dark"}>
      <Theme setTheme={setTheme} />
      <SaveMenu />
      <div className="container">
        <Header />
        <button onClick={() => setMenuState()}>Add New Note</button>
        {/* <InputArea desc={desc} setDesc={setDesc} /> */}
        <TodoContent />
      </div>
    </div>
  );
}
const App = () => {
  // const { addData, todoData, deleteData, updateData } = TodoHook();

  return (
    <TodoProvider>
      <AppNoProvider />
    </TodoProvider>
  );
};
export default App;
