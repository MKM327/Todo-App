import { createContext } from "react";
import TodoHook from "../Hooks/useTodo";
import useMenu from "../Hooks/useMenu";
import useTheme from "../Hooks/useTheme";
const TodoContext = createContext();
function TodoProvider({ children }) {
  const { addData, todoData, deleteData, updateData } = TodoHook();
  const { theme, setTheme } = useTheme();
  const {
    menuState,
    setMenuState,
    setHeader,
    setDescription,
    header,
    description,
    currentItem,
    setCurrentItem,
  } = useMenu();

  return (
    <TodoContext.Provider
      value={{
        theme,
        setTheme,
        setHeader,
        setDescription,
        addData,
        todoData,
        deleteData,
        updateData,
        menuState,
        setMenuState,
        header,
        description,
        currentItem,
        setCurrentItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
