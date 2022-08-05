import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const useNote = (data) => {
  const [filteredData, setFilteredData] = useState({});
  const { todoData } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  let id = parseInt(router.query.id);
  function filterData() {
    if (todoData.length > 0) {
      const filteredData = todoData.find((item) => item.id === id);
      setFilteredData(filteredData);
    } else {
      const filteredData = data.find((data) => data.id == id);
      setFilteredData(filteredData);
    }
  }
  useEffect(() => {
    if (Object.keys(filteredData).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    filterData();
  }, [id, todoData, loading, filteredData]);
  return { filteredData, loading, filterData };
};
export default useNote;
