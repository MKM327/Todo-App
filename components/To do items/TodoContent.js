import { useContext } from "react";
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

  return (
    <div>
      <ButtonRow />
      {todoData.map((value) => {
        return <TodoItem todoItem={value} key={value.id} />;
      })}
    </div>
  );
};
export default TodoContent;
