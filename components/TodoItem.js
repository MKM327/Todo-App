import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
import useDetails from "../Hooks/useDetails";
import Details from "./Details/Details";
import OpenDetailsButton from "./Details/OpenDetailsButton";
const TodoItem = ({ todoItem }) => {
  const { deleteData, setCurrentItem, setMenuState } = useContext(TodoContext);
  const { Header, id, Date, Description } = todoItem;
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
      <Details
        header={Header}
        description={Description}
        Date={Date}
        detailsState={detailsState}
      />
    </div>
  );
};
export default TodoItem;
