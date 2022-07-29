import { Children, createContext } from "react";
import Theme from "../components/Theme";
import TodoHook from "../Hooks/TodoHook";
import useTheme from "../Hooks/useTheme";

const TodoContext = createContext();
function TodoProvider({ children, desc }) {
  const { addData, todoData, deleteData, updateData } = TodoHook();
  return (
    <TodoContext.Provider
      value={{
        desc,
        addData,
        todoData,
        deleteData,
        updateData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
