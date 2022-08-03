import Toolbar from "../Toolbar/Toolbar";
import NoteButtons from "./NoteButtons";
import NoteDescription from "./NoteDescription";
const NotePage = ({ data }) => {
  return (
    <>
      <Toolbar />
      <div className="note-container">
        <div className="note-wrapper">
        <NoteButtons/>
          <div className="todo-wrapper">
            <NoteDescription data={data} />
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotePage;
