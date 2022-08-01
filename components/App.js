import TodoContent from "./To do items/TodoContent";
import { TodoContext, TodoProvider } from "../Contexts/TodoContext";
import SaveMenu from "./SaveMenu/SaveMenu";
import { useContext } from "react";
import Toolbar from "./Toolbar/Toolbar";
import { SearchProvider } from "../Contexts/SearchContext";
function AppNoProvider() {
  const {  theme } = useContext(TodoContext);

  return (
    <>
      <Toolbar />
      <div className={theme == "light" ? "wrapper" : "wrapper-dark"}>
        <SaveMenu />
        <div className="container">

          <TodoContent />
        </div>
      </div>
    </>
  );
}
const App = () => {
  return (
    <SearchProvider>
      <TodoProvider>
        <AppNoProvider />
      </TodoProvider>
    </SearchProvider>
  );
};
export default App;
