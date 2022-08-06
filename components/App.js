import TodoContent from "./To do items/TodoContent";
import { TodoContext } from "../Contexts/TodoContext";
import { useContext } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SaveMenu from "../components/SaveMenu/SaveMenu";
function AppNoProvider() {
  const { theme } = useContext(TodoContext);
  return (
    <>
      <Toolbar />
      <div className={`wrapper ${theme}`}>
        <div className="container">
          <SaveMenu />
          <TodoContent />
        </div>
      </div>
    </>
  );
}
const App = () => {
  return <AppNoProvider />;
};
export default App;
