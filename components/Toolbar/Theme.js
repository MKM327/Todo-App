import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";

const Theme = () => {
  const { setTheme } = useContext(TodoContext);
  return (
    <select
      name="select"
      id="todo-select"
      className="todo-select"
      onChange={(event) => {
        setTheme(event.target.value);
      }}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};
export default Theme;
