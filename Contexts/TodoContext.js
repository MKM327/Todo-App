import { createContext } from "react";
import TodoHook from "../Hooks/TodoHook";
import useMenu from "../Hooks/useMenu";
const TodoContext = createContext();
function TodoProvider({ children }) {
  const { addData, todoData, deleteData, updateData } = TodoHook();
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
