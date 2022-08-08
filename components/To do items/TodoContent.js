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
  const numberOfTodoPerPage = 3;
  const numberOfPages =
    remainingPages == 0
      ? Math.floor(todoData.length / numberOfTodoPerPage)
      : Math.floor(todoData.length / numberOfTodoPerPage) + 1;
  const remainingPages = todoData.length % 3;
  console.log(remainingPages);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <ButtonRow />
      <h2>All Notes</h2>

      <div className="all-todo">
        {todoData.map((item, index) => {
          if (index >= (currentPage - 1) * 3 && index < currentPage * 3) {
            return <TodoItem key={index} todoItem={item} />;
          }
        })}
      </div>
      <div className="page-row">
        {remainingPages == 0
          ? Array.from({ length: numberOfPages }).map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })
          : Array.from({ length: numberOfPages + 1 }).map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
      </div>
    </div>
  );
};
export default TodoContent;
