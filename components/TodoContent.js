import TodoItem from "./TodoItem";
const TodoContent = ({ todoData, deleteData }) => {
  return todoData.map((value) => {
    return (
      <TodoItem
        todoData={value}
        key={value.id}
        deleteData={deleteData}
      />
    );
  });
};
export default TodoContent;
