import { useContext, useState } from "react";
import SaveMenu from "../SaveMenu/SaveMenu";
import Toolbar from "../Toolbar/Toolbar";
import NoteButtons from "./NoteButtons";
import NoteDescription from "./NoteDescription";
import { MenuProvider } from "../../Contexts/MenuContext";
import useNote from "../../Hooks/useNote";
import axios from "axios";
const NotePage = ({ data }) => {
  const { filteredData, loading } = useNote(data);
  return (
    <MenuProvider data={filteredData}>
      <Toolbar />
      <div className="note-container">
        <div className="note-wrapper">
          <SaveMenu />
          <NoteButtons filteredData={filteredData} />
          <div className="todo-wrapper">
            {loading ? (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <NoteDescription data={filteredData} />
            )}
          </div>
        </div>
      </div>
    </MenuProvider>
  );
};
export default NotePage;
