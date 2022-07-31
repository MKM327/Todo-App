import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import useDetails from "../../Hooks/useDetails";
import Details from "./../Details/Details";
import OpenDetailsButton from "./../Details/OpenDetailsButton";
const ManageTodoButtons = ({ todoItem }) => {
  const { deleteData, setCurrentItem, setMenuState } = useContext(TodoContext);
  const { id } = todoItem;
  return (
    <div>
      <button onClick={() => deleteData(id)}>Delete</button>
      <button
        onClick={() => {
          setMenuState();
          setCurrentItem(todoItem);
        }}
      >
        Update
      </button>
    </div>
  );
};
const TodoItem = ({ todoItem }) => {
  const { Header, Date } = todoItem;
  const { detailsState, setDetailsState } = useDetails();

  return (
    <div className="todo-item">
      <div className="button-div">
        <OpenDetailsButton
          detailsState={detailsState}
          setDetailsState={setDetailsState}
        />
        <span>{Header}</span>
      </div>
      <div>{Date}</div>
      <div>
        <ManageTodoButtons todoItem={todoItem} />
      </div>
      <Details todoItem={todoItem} detailsState={detailsState} />
    </div>
  );
};
export default TodoItem;
