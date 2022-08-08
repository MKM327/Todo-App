import { createContext } from "react";
import useTodo from "../Hooks/useTodo";
import useMenu from "../Hooks/useMenu";
import useTheme from "../Hooks/useTheme";
import useFirebase from "../Hooks/useFirebase";
const TodoContext = createContext();
function TodoProvider({ children }) {
  const { updateData, deleteData, getDataWithId } = useTodo();
  const { todoData,addData } = useFirebase();
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
