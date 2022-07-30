import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import TodoInfo from "./TodoInfo";
const SaveMenu = () => {
  const {
    menuState,
    setMenuState,
    addData,
    header,
    description,
    updateData,
    currentItem,
    setCurrentItem,
  } = useContext(TodoContext);
  return (
    <div
      className={menuState ? "todo-save-menu open" : "todo-save-menu closed"}
    >
      <div className="save-menu-wrapper">
        <div className="menu-close">
          <button onClick={() => setMenuState()}>X</button>
        </div>
        <TodoInfo />
        <div>
          <button
            className="input-btn save-menu-btn"
            onClick={() => {
              if (!currentItem) {
                addData(header, description);
              } else {
                updateData(currentItem.id, header, description);
                setCurrentItem(undefined);
                setMenuState();
              }
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default SaveMenu;
