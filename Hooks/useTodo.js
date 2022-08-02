import axios from "axios";
import { useEffect, useState } from "react";
const apiRoot = "api/todo";
function useTodo() {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    GetData();
  }, []);
  //get the data from json
  async function GetData() {
    const result = await axios.get(apiRoot);
    setTodoData(result.data);
  }
  //Add the data from json

  async function addData(header, description) {
    const options = {
      url: `${apiRoot}/99999`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        Header: header,
        Description: description,
      },
    };
    await axios(options);
    await GetData();
  }
  //Delete the data from json with the id

  const deleteData = async (id) => {
    await axios.delete(`${apiRoot}/${id}`);
    await GetData();
  };
  //Update the data from json

  const updateData = async (id, header, description) => {
    const options = {
      url: `${apiRoot}/${id}`,
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        Header: header,
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

export default useTodo;
