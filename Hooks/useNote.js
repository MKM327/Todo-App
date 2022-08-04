import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const useNote = () => {
  const { todoData } = useContext(TodoContext);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  let id = parseInt(router.query.id);
  function FilterData(id) {
    const filteredData = todoData.find((data) => data.id == id);
    setData(filteredData);
  }
  useEffect(() => {
    if (todoData.Length == 0) {
      setLoading(true);
      FilterData(id);
    }
    FilterData(id);
  }, [id, todoData]);
  return { data, loading };
};
export default useNote;
