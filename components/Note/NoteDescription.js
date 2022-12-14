import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
const NoteDescription = ({ data, finished, setFinished }) => {
  const { updateData } = useContext(TodoContext);
  return (
    <>
      <div className="note-header">
        <h4>{data.Header}</h4>
        <span>{data.Date}</span>
      </div>
      <p>{data.Description}</p>
      <div>
        <input
          type="checkbox"
          name="isDone"
          id=""
          className="note-checkbox"
          checked={data.Finished}
          onChange={() => {
            data.Finished = !data.Finished;
            updateData(data.id, data.Header, data.Description, data.Finished);
          }}
        />
        <label htmlFor="isDone">Mark as Finished</label>
      </div>
    </>
  );
};
export default NoteDescription;
