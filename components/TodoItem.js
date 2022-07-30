import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const TodoItem = ({ todoData }) => {
  const { deleteData, updateData, desc } = useContext(TodoContext);
  const { Header, id, date } = todoData;
  return (
    <div className="todo-item">
      <span>{Header}</span>
      <div>{date}</div>
      <div>
        <button onClick={() => deleteData(id)}>Delete</button>
        <button onClick={() => updateData(id, desc)}>Update</button>
      </div>
    </div>
  );
};
export default TodoItem;
