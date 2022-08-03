import { useState } from "react";
import SaveMenu from "../SaveMenu/SaveMenu";
import Toolbar from "../Toolbar/Toolbar";
import NoteButtons from "./NoteButtons";
import NoteDescription from "./NoteDescription";
const NotePage = ({ data }) => {
  const [menu, setMenu] = useState("closed");
  return (
    <>
      <Toolbar />
      <div className="note-container">
        <div className="note-wrapper">
          <SaveMenu menu={menu} setMenu={setMenu} data={data} />
          <NoteButtons setMenu={setMenu} />
          <div className="todo-wrapper">
            <NoteDescription data={data} />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotePage;
