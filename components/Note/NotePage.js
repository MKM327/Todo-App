import { useContext, useState } from "react";
import SaveMenu from "../SaveMenu/SaveMenu";
import Toolbar from "../Toolbar/Toolbar";
import NoteButtons from "./NoteButtons";
import NoteDescription from "./NoteDescription";
import { MenuProvider } from "../../Contexts/MenuContext";
import useNote from "../../Hooks/useNote";
import axios from "axios";
import TodoContent from "../To do items/TodoContent";
import { TodoContext } from "../../Contexts/TodoContext";
const NotePage = ({ data }) => {
  
  const { filteredData, loading, setFinished } = useNote(data);
  const { theme } = useContext(TodoContext);
  return (
    <MenuProvider data={filteredData}>
      <Toolbar />
      <div className={`note-container ${theme}`}>
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
              <NoteDescription data={filteredData} setFinished={setFinished} />
            )}
          </div>
        </div>
      </div>
    </MenuProvider>
  );
};
export default NotePage;
class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
