import { Children, createContext } from "react";
import TodoHook from "../Hooks/TodoHook";

const TodoContext = createContext();
function TodoProvider({ children, desc }) {
  const { addData, todoData, deleteData, updateData } = TodoHook();
  return (
    <TodoContext.Provider
      value={{ desc, addData, todoData, deleteData, updateData }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
