import { useState } from "react";
import SaveMenu from "../SaveMenu/SaveMenu";
import Toolbar from "../Toolbar/Toolbar";
import NoteButtons from "./NoteButtons";
import NoteDescription from "./NoteDescription";
import { MenuProvider } from "../../Contexts/MenuContext";
import useNote from "../../Hooks/useNote";
const NotePage = () => {
  const { data, loading } = useNote();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MenuProvider data={data}>
      <Toolbar />
      <div className="note-container">
        <div className="note-wrapper">
          <SaveMenu />
          <NoteButtons />
          <div className="todo-wrapper">
            <NoteDescription data={data} />
            <div></div>
          </div>
        </div>
      </div>
    </MenuProvider>
  );
};
export default NotePage;
