import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoInfo from "./TodoInfo";
const SaveTodoButton = () => {
  const {
    addData,
    header,
    description,
    updateData,
    currentItem,
    setCurrentItem,
    setMenuState,
  } = useContext(TodoContext);
  const ItemState = !currentItem;
  let apiStatus;
  return (
    <div>
      <button
        className="input-btn save-menu-btn"
        onClick={() => {
          if (ItemState) {
            addData(header, description);
            setMenuState();
          } else {
            updateData(currentItem.id, header, description);
            setCurrentItem(undefined);
            setMenuState();
          }
        }}
      >
        {ItemState ? "Add" : "Update"}
      </button>
    </div>
  );
};
const MenuCloseButton = () => {
  const { setMenuState, setCurrentItem } = useContext(TodoContext);
  return (
    <div className="menu-close">
      <button
        onClick={() => {
          setMenuState();
          setCurrentItem(undefined);
        }}
      >
        X
      </button>
    </div>
  );
};
const SaveMenu = () => {
  const { menuState } = useContext(TodoContext);
  return (
    <div
      className={menuState ? "todo-save-menu open" : "todo-save-menu closed"}
    >
      <div className="save-menu-wrapper">
        <MenuCloseButton />
        <TodoInfo />
        <SaveTodoButton />
      </div>
    </div>
  );
};
export default SaveMenu;
