import { useState } from "react";
import SaveMenu from "../SaveMenu/SaveMenu";
import Toolbar from "../Toolbar/Toolbar";
import NoteButtons from "./NoteButtons";
import NoteDescription from "./NoteDescription";
import { MenuProvider } from "../../Contexts/MenuContext";
const NotePage = ({ data }) => {
  return (
    <MenuProvider data={data}>
      <Toolbar />
      <div className="note-container">
        <div className="note-wrapper">
          <SaveMenu />
          <NoteButtons  />
          <div className="todo-wrapper">
            <NoteDescription />
            <div></div>
          </div>
        </div>
      </div>
    </MenuProvider>
  );
};
export default NotePage;
