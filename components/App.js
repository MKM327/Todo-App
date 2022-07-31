import TodoContent from "./TodoContent";
import { TodoContext, TodoProvider } from "../Contexts/TodoContext";
import Header from "./Header";
import Theme from "./Theme";
import useTheme from "../Hooks/useTheme";
import SaveMenu from "./SaveMenu/SaveMenu";
import { useContext } from "react";
function AppNoProvider() {
  const { setMenuState, theme, setTheme } = useContext(TodoContext);
  return (
    <div className={theme == "light" ? "wrapper" : "wrapper-dark"}>
      <Theme setTheme={setTheme} />
      <SaveMenu />
      <div className="container">
        <Header />
        <button onClick={() => setMenuState()}>Add New Note</button>
        <TodoContent />
      </div>
    </div>
  );
}
const App = () => {
  return (
    <TodoProvider>
      <AppNoProvider />
    </TodoProvider>
  );
};
export default App;
