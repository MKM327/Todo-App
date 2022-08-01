import TodoContent from "./To do items/TodoContent";
import { TodoContext, TodoProvider } from "../Contexts/TodoContext";
import SaveMenu from "./SaveMenu/SaveMenu";
import { useContext } from "react";
import Toolbar from "./Toolbar/Toolbar";
import useSearch from "../Hooks/useSearch";
function AppNoProvider() {
  const { setMenuState, theme } = useContext(TodoContext);
  const { setSearchValue, getSearchResult, searched, setSearched } =
    useSearch();

  return (
    <>
      <Toolbar setSearchValue={setSearchValue} setSearched={setSearched} />
      <div className={theme == "light" ? "wrapper" : "wrapper-dark"}>
        <SaveMenu />
        <div className="container">
          <button onClick={() => setMenuState()}>Add New Note</button>
          <TodoContent getSearchResult={getSearchResult} searched={searched} />
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
