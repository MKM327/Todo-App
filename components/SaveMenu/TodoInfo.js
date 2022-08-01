import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";

const TodoInfo = () => {
  const { setHeader, setDescription } = useContext(TodoContext);
  return (
    <>
      <div>
        <input
          name="input-header"
          type="text"
          className="input-text input-text-header"
          placeholder="header"
          onChange={(event) => setHeader(event.target.value)}
        />
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols=" 90"
          rows="7"
          className="input-text-desc"
          placeholder="description"
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
    </>
  );
};
export default TodoInfo;
