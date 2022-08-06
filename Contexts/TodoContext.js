import { createContext } from "react";
import useTodo from "../Hooks/useTodo";
import useMenu from "../Hooks/useMenu";
import useTheme from "../Hooks/useTheme";
const TodoContext = createContext();
function TodoProvider({ children }) {
  const { addData, todoData, deleteData, updateData } = useTodo();
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
