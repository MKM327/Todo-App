import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const TodoItem = ({ todoData }) => {
  const { deleteData, updateData, desc } = useContext(TodoContext);
  console.log(deleteData);
  const { Description, id } = todoData;
  return (
    <div className="todo-item">
      <span>{Description}</span>
      <div>
        <button onClick={() => deleteData(id)}>Delete</button>
        <button onClick={() => updateData(id, desc)}>Update</button>
      </div>
    </div>
  );
};
export default TodoItem;
