import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const useNote = (data) => {
  const [filteredData, setFilteredData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  let id = parseInt(router.query.id);
  function filterData() {
    debugger;
    const filteredData = data.find((data) => data.id == id);
    setFilteredData(filteredData);
  }
  useEffect(() => {
    if (Object.keys(filteredData).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    filterData();
  }, [id, filteredData]);
  return { filteredData, loading, filterData };
};
export default useNote;
