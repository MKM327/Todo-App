import TodoInfo from "./TodoInfo";
const SaveMenu = () => {
  return (
    <div class="todo-save-menu" id="todo-save-menu">
      <div class="save-menu-wrapper">
        <div class="menu-close">
          <button>X</button>
        </div>
        <TodoInfo />
        <div>
          <button class="input-btn save-menu-btn">Save</button>
        </div>
      </div>
    </div>
  );
};
export default SaveMenu;
