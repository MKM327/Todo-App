import path from "path";
import fs from "fs";
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export default async function handler(req, res) {
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.body;
  const jsonFile = path.resolve("./", "data.json");
  switch (method) {
    case "POST":
      await postMethod();
      break;
    case "PUT":
      await putMethod();
      break;
    case "DELETE":
      await deleteMethod();
      break;
    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }
  function getDate() {
    var today = new Date();
    const date = today.toLocaleDateString("en-US");
    const time = today.toLocaleTimeString("en-US");

    return ` Date: ${date} Time :${time}`;
  }
  async function postMethod() {
    const readFileData = await readFile(jsonFile);
    const todo = JSON.parse(readFileData);
    if (!todo) {
      res.status(404).send("Error: Request failed with status code 404");
    } else {
      //Find the biggest id and add one
      const idNew =
        todo.reduce((accumulator, currentValue) => {
          const idCurrent = parseInt(currentValue.id);
          return idCurrent > accumulator ? idCurrent : accumulator;
        }, 0) + 1;

      const newToDo = { ...recordFromBody, id: idNew, date: getDate() };
      const newTodoList = [...todo, newToDo];
      writeFile(jsonFile, JSON.stringify(newTodoList, null, 2));
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(todo, null, 2));
      console.log("POST api/todo status 200");
    }
  }

  async function deleteMethod() {
    const readFileData = await readFile(jsonFile);
    const todo = JSON.parse(readFileData);
    if (!todo) {
      res.status(404).send("Error: Request failed with status code 404");
    }
    let newList = todo.filter((value) => {
      return value.id != id;
    });
    writeFile(jsonFile, JSON.stringify(newList, null, 2));

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(todo, null, 2));
    console.log("DELETE api/todo status 200");
  }
  async function putMethod() {
    const readFileData = await readFile(jsonFile);
    const todo = JSON.parse(readFileData);
    let data = todo.find((value) => {
      return value.id == id;
    });
    console.log(id);
    const UpdatedData = { ...data, Description: recordFromBody.Description };
    console.log(recordFromBody);
    console.log(UpdatedData);
    const newList = todo.map((value) => {
      return value.id == id ? UpdatedData : value;
    });
    writeFile(jsonFile, JSON.stringify(newList, null, 2));
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(todo, null, 2));
    console.log("Update api/todo status 200");
  }
}
