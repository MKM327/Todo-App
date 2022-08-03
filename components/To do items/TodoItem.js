import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import useDetails from "../../Hooks/useDetails";
import Details from "./../Details/Details";
import OpenDetailsButton from "./../Details/OpenDetailsButton";

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
      <Details todoItem={todoItem} detailsState={detailsState} />
    </div>
  );
};
export default TodoItem;
