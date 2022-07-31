import useDetails from "../../Hooks/useDetails";

const Details = ({ todoItem, detailsState }) => {
  const { Header, Date, Description } = todoItem;
  return (
    <div
      class={
        detailsState
          ? "todo-details details-open"
          : "todo-details  details-closed"
      }
    >
      <div>
        <h3>{Header}</h3>
        <span>{Date}</span>
      </div>

      <div class="details-description">
        <p>{Description}</p>
      </div>
    </div>
  );
};
export default Details;
