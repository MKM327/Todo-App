const TodoItem = ({ todoData, deleteData, id }) => {
  const { Description } = todoData;
  return (
    <div className="todo-item">
      <span>{Description}</span>
      <div>
        <button onClick={() => deleteData(id)}>Delete</button>
        <button>Update</button>
      </div>
    </div>
  );
};
export default TodoItem;
