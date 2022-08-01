import TodoContent from "./To do items/TodoContent";
import { TodoContext, TodoProvider } from "../Contexts/TodoContext";
import SaveMenu from "./SaveMenu/SaveMenu";
import { useContext } from "react";
import Toolbar from "./Toolbar/Toolbar";
function AppNoProvider() {
  const { setMenuState, theme } = useContext(TodoContext);
  return (
    <>
      <Toolbar />
      <div className={theme == "light" ? "wrapper" : "wrapper-dark"}>
        <SaveMenu />
        <div className="container">
          <button onClick={() => setMenuState()}>Add New Note</button>
          <TodoContent />
        </div>
      </div>
    </>
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
