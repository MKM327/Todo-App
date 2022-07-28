import axios from "axios";
import { useEffect, useState } from "react";
import data from "../data.json";
const apiRoot = "api/todo";
function TodoHook() {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    GetData();
  }, []);
  async function GetData() {
    const result = await axios.get(apiRoot);
    setTodoData(result.data);
  }
  const addData = (description) => {
    const options = {
      url: `${apiRoot}/99999`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        Description: description,
      },
    };
    axios(options);
    GetData();
  };
  const deleteData = (id) => {
    axios.delete(`${apiRoot}/${id}`);
    GetData();
  };
  return {
    addData,
    todoData,
    deleteData,
  };
}

export { TodoHook };
