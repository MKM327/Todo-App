import { useState } from "react";
import TodoItem from "../components/To do items/TodoItem";
const usePage = (todoData) => {
  const remainingPages = todoData.length % 3;
  const numberOfTodoPerPage = 3;
  const numberOfPages =
    remainingPages == 0
      ? Math.floor(todoData.length / numberOfTodoPerPage)
      : Math.floor(todoData.length / numberOfTodoPerPage) + 1;
  const [currentPage, setCurrentPage] = useState(1);
  const initPages = () => {
    return Array.from({ length: numberOfPages }).map((_, index) => {
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
    });
  };
  const todoPerPage = () => {
    return todoData.map((item, index) => {
      if (index >= (currentPage - 1) * 3 && index < currentPage * 3) {
        return <TodoItem key={index} todoItem={item} />;
      }
    });
  };
  return {
    todoPerPage,
    initPages,
  };
};
export default usePage;
