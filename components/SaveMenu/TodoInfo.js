import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";

const TodoInfo = () => {
  const { setHeader, setDescription } = useContext(TodoContext);

  return (
    <div>
      <div>
        <input
          name="input-header"
          type="text"
          class="input-text input-text-header"
          placeholder="Header"
          onChange={(event) => setHeader(event.target.value)}
        />
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols=" 90"
          rows="7"
          class="input-text-desc"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
    </div>
  );
};
export default TodoInfo;
