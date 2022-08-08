import { useContext, useState } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoItem from "./TodoItem";
import { MenuContext } from "../../Contexts/MenuContext";
import usePage from "../../Hooks/usePage";

const ButtonRow = () => {
  const { setMenuState, setMenuMode } = useContext(MenuContext);
  return (
    <div className="button-row">
      <button
        onClick={() => {
          setMenuState(true);
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
  const { initPages, todoPerPage } = usePage(todoData);
  return (
    <div>
      <ButtonRow />
      <h2>All Notes</h2>
      <div className="all-todo">{todoPerPage()}</div>
      <div className="page-row">{initPages()}</div>
    </div>
  );
};
export default TodoContent;
