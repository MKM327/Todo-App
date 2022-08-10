import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";
const useNote = (data) => {
  const [filteredData, setFilteredData] = useState({});
  const { getDataWithId } = useContext(TodoContext);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  let id = router.query.id;
  function filterData() {
    getDataWithId(id).then((data) => {
      setFilteredData(data);
      setLoading(false);
    });
  }
  useEffect(() => {
    if (Object.keys(filteredData).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    setFinished(filteredData.Finished);
    filterData();
  }, [id, loading, filteredData]);
  return {
    filteredData,
    loading,
    filterData,
    finished,
  };
};
export default useNote;
