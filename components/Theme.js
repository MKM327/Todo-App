const Theme = ({ setTheme }) => {
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
