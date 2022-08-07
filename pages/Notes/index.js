import { useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
const AllNotes = () => {
  const { todoData } = useContext(TodoContext);
  return (
    <div>
      {todoData.map((item) => {
        return <div>{item.Header}</div>;
      })}
    </div>
  );
};
export default AllNotes;
