import axios from "axios";
import { useEffect, useState } from "react";
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
  async function addData(description) {
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
    await axios(options);
    await GetData();
  }
  const deleteData = async (id) => {
    await axios.delete(`${apiRoot}/${id}`);
    await GetData();
  };
  const updateData = async (id, description) => {
    const options = {
      url: `${apiRoot}/${id}`,
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        Description: description,
      },
    };
    await axios(options);
    await GetData();
  };
  return {
    addData,
    todoData,
    deleteData,
    updateData,
  };
}

export default TodoHook;
