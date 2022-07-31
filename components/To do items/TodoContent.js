import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoItem from "./TodoItem";
const TodoContent = () => {
  const { todoData } = useContext(TodoContext);
  return todoData.map((value) => {
    return <TodoItem todoItem={value} key={value.id} />;
  });
};
export default TodoContent;
