import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";

const Details = ({ todoItem, detailsState }) => {
  const { theme } = useContext(TodoContext);
  const { Header, Date, Description } = todoItem;
  return (
    <div
      className={
        theme == "light"
          ? detailsState
            ? "todo-details details-open"
            : "todo-details  details-closed"
          : detailsState
          ? "todo-details details-dark details-open"
          : "todo-details details-dark details-closed"
      }
    >
      <div>
        <h3>{Header}</h3>
        <span>{Date}</span>
      </div>

      <div className="details-description">
        <p>{Description}</p>
      </div>
    </div>
  );
};
export default Details;
