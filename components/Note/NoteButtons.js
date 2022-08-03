import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
const NoteButtons = () => {
  const { setMenuState } = useContext(MenuContext);
  return (
    <div className="button-wrapper">
      <button className="edit-btn" onClick={() => setMenuState()}>
        Edit
      </button>
      <button className="edit-btn">Delete</button>
    </div>
  );
};
export default NoteButtons;
