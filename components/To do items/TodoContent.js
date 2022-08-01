import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoItem from "./TodoItem";
const TodoContent = () => {
  const { todoData } = useContext(TodoContext);
  const { getSearchResult, setSearched, searched } = useContext(SearchContext);
  const { setMenuState } = useContext(TodoContext);

  if (!searched) {
    return (
      <div>
        <div className="button-row-no-Search">
          <button onClick={() => setMenuState()}>Add New Note</button>
        </div>
        {todoData.map((value) => {
          return <TodoItem todoItem={value} key={value.id} />;
        })}
      </div>
    );
  } else {
    const searchedList = getSearchResult(todoData);
    return (
      <div>
        <div className="button-row">
          <button onClick={() => setMenuState()}>Add New Note</button>
          <button
            className="todo-exit-buttton"
            onClick={() => setSearched(false)}
          >
            Exit Search
          </button>
        </div>
        {searchedList.map((value) => {
          return <TodoItem todoItem={value} key={value.id} />;
        })}
      </div>
    );
  }
};
export default TodoContent;
