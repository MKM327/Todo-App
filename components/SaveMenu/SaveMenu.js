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
    update,
    updateData,
    currentItem,
  } = useContext(TodoContext);
  return (
    <div class={menuState ? "todo-save-menu open" : "todo-save-menu closed"}>
      <div class="save-menu-wrapper">
        <div class="menu-close">
          <button onClick={() => setMenuState()}>X</button>
        </div>
        <TodoInfo />
        <div>
          <button
            class="input-btn save-menu-btn"
            onClick={() => {
              if (!update) {
                addData(header, description);
              } else {
                console.log(currentItem);
                updateData(currentItem);
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
