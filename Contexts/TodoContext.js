import { createContext } from "react";
import useMenu from "../Hooks/useMenu";
import useTheme from "../Hooks/useTheme";
import useFirebase from "../Hooks/useFirebase";
const TodoContext = createContext();
function TodoProvider({ children }) {
  const {
    todoData,
    addData,
    getDataWithId,
    updateData,
    deleteData,
    getAllData,
  } = useFirebase();
  const { theme, setTheme } = useTheme();
  const { menuState, setMenuState } = useMenu();

  return (
    <TodoContext.Provider
      value={{
        theme,
        setTheme,
        addData,
        todoData,
        deleteData,
        updateData,
        menuState,
        setMenuState,
        getDataWithId,
        getAllData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
