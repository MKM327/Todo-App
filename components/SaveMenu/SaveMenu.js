import { useContext } from "react";
import TodoInfo from "./TodoInfo";
import { MenuContext } from "../../Contexts/MenuContext";
import { TodoContext } from "../../Contexts/TodoContext";
const SaveTodoButton = () => {
  const { data, header, description, menuMode } = useContext(MenuContext);
  const { updateData, addData } = useContext(TodoContext);
  const menuModeBool = menuMode == "update";
  return (
    <div>
      <button
        className="input-btn save-menu-btn"
        onClick={() => {
          menuModeBool
            ? updateData(data.id, header, description, data.Finished)
            : addData(header, description);
        }}
      >
        {menuModeBool ? "Update" : "Add"}
      </button>
    </div>
  );
};
const MenuCloseButton = () => {
  const { setMenuState } = useContext(MenuContext);

  return (
    <div className="menu-close">
      <button
        onClick={() => {
          setMenuState("closed");
        }}
      >
        X
      </button>
    </div>
  );
};
const SaveMenu = () => {
  const { menuState } = useContext(MenuContext);
  return (
    <div className={`todo-save-menu ${menuState}`}>
      <div className="save-menu-wrapper">
        <MenuCloseButton />
        <TodoInfo />
        <SaveTodoButton />
      </div>
    </div>
  );
};
export default SaveMenu;
