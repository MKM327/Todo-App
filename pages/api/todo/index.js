import path from "path";
import fs, { read } from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
export default async function handler(req, res) {
  const dataPath = path.resolve("./", "data.json");
  try {
    const readData = await readFile(dataPath);
    const todo = JSON.parse(readData);
    if (todo) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(todo, null, 2));
      console.log("GET api/todo status 200");
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("File Not Found on server");
  }
}
