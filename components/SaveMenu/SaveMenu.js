import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoInfo from "./TodoInfo";
const SaveTodoButton = ({ data }) => {
  const { id } = data;
  const { updateData, header, description } = useContext(TodoContext);
  return (
    <div>
      <button
        className="input-btn save-menu-btn"
        onClick={() => {
          updateData(id, header, description);
        }}
      >
        Update
      </button>
    </div>
  );
};
const MenuCloseButton = ({ setMenu }) => {
  return (
    <div className="menu-close">
      <button
        onClick={() => {
          setMenu("closed");
        }}
      >
        X
      </button>
    </div>
  );
};
const SaveMenu = ({ menu, setMenu, data }) => {
  return (
    <div
      className={
        menu == "open" ? "todo-save-menu open" : "todo-save-menu closed"
      }
    >
      <div className="save-menu-wrapper">
        <MenuCloseButton setMenu={setMenu} />
        <TodoInfo />
        <SaveTodoButton data={data} />
      </div>
    </div>
  );
};
export default SaveMenu;
