import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoItem from "./TodoItem";
const ButtonRow = () => {
  const { setMenuState } = useContext(TodoContext);
  return (
    <div className="button-row">
      <button onClick={() => setMenuState()}>Add New Note</button>
    </div>
  );
};
const TodoContent = () => {
  const { todoData } = useContext(TodoContext);
  const { getSearchResult, setSearched, searched } = useContext(SearchContext);

  if (!searched) {
    return (
      <div>
        <ButtonRow />
        {todoData.map((value) => {
          return <TodoItem todoItem={value} key={value.id} />;
        })}
      </div>
    );
  } else {
    const searchedList = getSearchResult(todoData);
    return (
      <div>
        <ButtonRow />
        {searchedList.map((value) => {
          return <TodoItem todoItem={value} key={value.id} />;
        })}
      </div>
    );
  }
};
export default TodoContent;
