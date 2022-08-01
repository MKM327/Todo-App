import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoItem from "./TodoItem";
const TodoContent = ({ getSearchResult, searched }) => {
  const { todoData } = useContext(TodoContext);
  if (!searched) {
    return todoData.map((value) => {
      return <TodoItem todoItem={value} key={value.id} />;
    });
  } else {
    const searchedList = getSearchResult(todoData);
    return searchedList.map((value) => {
      return <TodoItem todoItem={value} key={value.id} />;
    });
  }
};
export default TodoContent;
