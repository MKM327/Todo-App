import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
const NoteDescription = () => {
  const { data } = useContext(MenuContext);
  return (
    <>
      <div className="note-header">
        <h4>{data.Header}</h4>
        <span>{data.Date}</span>
      </div>
      <p>{data.Description}</p>
      <div>
        <input type="checkbox" name="isDone" id="" className="note-checkbox" />
        <label htmlFor="isDone">Mark as Finished</label>
      </div>
    </>
  );
};
export default NoteDescription;
