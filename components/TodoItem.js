import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const TodoItem = ({ todoData }) => {
  const { deleteData, setCurrentItem, setMenuState } = useContext(TodoContext);
  const { Header, id, date } = todoData;
  return (
    <div className="todo-item">
      <span>{Header}</span>
      <div>{date}</div>
      <div>
        <button onClick={() => deleteData(id)}>Delete</button>
        <button
          onClick={() => {
            setMenuState();
            setCurrentItem(todoData);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
