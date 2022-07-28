import { useContext, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const InputArea = ({ desc, setDesc }) => {
  const { addData } = useContext(TodoContext);
  return (
    <div className="input-area">
      <input
        className="input-text"
        name="task"
        type="text"
        id="input"
        onChange={(event) => setDesc(event.target.value)}
      />
      <button
        className="input-btn"
        onClick={() => {
          addData(desc);
        }}
      >
        Save
      </button>
    </div>
  );
};
export default InputArea;
