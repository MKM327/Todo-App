import { useContext, useState } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoItem from "./TodoItem";
import { MenuContext } from "../../Contexts/MenuContext";
const ButtonRow = () => {
  const { setMenuState, setMenuMode } = useContext(MenuContext);
  return (
    <div className="button-row">
      <button
        onClick={() => {
          setMenuState();
          setMenuMode("add");
        }}
      >
        Add New Note
      </button>
    </div>
  );
};
const TodoContent = () => {
  const { todoData } = useContext(TodoContext);

  const [page, setPage] = useState(1);
  return (
    <div>
      <ButtonRow />
      <h2>All Notes</h2>

      <div className="all-todo">
        {todoData.map((todoItem) => {
          return <TodoItem todoItem={todoItem} />;
        })}
      </div>
    </div>
  );
};
export default TodoContent;
