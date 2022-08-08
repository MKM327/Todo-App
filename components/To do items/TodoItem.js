import useDetails from "../../Hooks/useDetails";
import Details from "./../Details/Details";
import OpenDetailsButton from "./../Details/OpenDetailsButton";
import Link from "next/link";
const TodoItem = ({ todoItem }) => {
  const { id, Header, Date } = todoItem;
  const { detailsState, setDetailsState } = useDetails();

  return (
    <div className="todo-item">
      <div className="button-div">
        <OpenDetailsButton
          detailsState={detailsState}
          setDetailsState={setDetailsState}
        />
      </div>
        <Details todoItem={todoItem} detailsState={detailsState} />
      <Link href={`/Notes/${id}`}>
        <div className="todo-item-desc">
          <span>{Header}</span>
          <div>{Date}</div>
        </div>
      </Link>
    </div>
  );
};
export default TodoItem;
