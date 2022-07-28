import InputArea from "./InputArea";
import TodoContent from "./TodoContent";
import { TodoHook } from "../Hooks/TodoHook";
import Header from "./Header";
import { useState } from "react";
const App = () => {
  const { addData, todoData, deleteData, updateData } = TodoHook();
  const [update, setUpdate] = useState(false);
  return (
    <div className="container">
      <Header Update={update} />
      <InputArea addData={addData} />
      <TodoContent
        todoData={todoData}
        deleteData={deleteData}
        updateData={updateData}
      />
    </div>
  );
};
export default App;
