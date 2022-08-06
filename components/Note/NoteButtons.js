import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import { TodoContext } from "../../Contexts/TodoContext";
const NoteButtons = ({ filteredData }) => {
  const { setMenuState,setMenuMode } = useContext(MenuContext);
  const { deleteData } = useContext(TodoContext);
  return (
    <div className="button-wrapper">
      <button className="edit-btn" onClick={() =>{ 
        setMenuState()
        setMenuMode("update")
        }}>
        Edit
      </button>
      <Link href={"/"}>
        <button
          className="edit-btn"
          onClick={() => {
            deleteData(filteredData.id);
          }}
        >
          Delete
        </button>
      </Link>
    </div>
  );
};
export default NoteButtons;
