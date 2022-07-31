import useDetails from "../../Hooks/useDetails";

const Details = ({ header, description, Date, detailsState }) => {
  return (
    <div
      class={
        detailsState
          ? "todo-details details-open"
          : "todo-details  details-closed"
      }
    >
      <div>
        <h3>{header}</h3>
        <span>{Date}</span>
      </div>

      <div class="details-description">
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Details;
