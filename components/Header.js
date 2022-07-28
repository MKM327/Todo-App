const Header = ({ Update, value }) => {
  if (Update) {
    return (
      <div>
        <h2 className="todo-header">Todo App</h2>
        <span>Updating {value}</span>
      </div>
    );
  }
  return <h2 className="todo-header">Todo App</h2>;
};
export default Header;
