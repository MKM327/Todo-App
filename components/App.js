import InputArea from "./InputArea";
import TodoContent from "./TodoContent";
import { TodoHook } from "../Hooks/TodoHook";
const App = () => {
  const { addData, todoData, deleteData } = TodoHook();
  return (
    <div className="container">
      <h2 className="todo-header">Todo App</h2>
      <InputArea addData={addData} />
      <TodoContent todoData={todoData} deleteData={deleteData} />
    </div>
  );
};
export default App;
