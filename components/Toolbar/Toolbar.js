import { useContext, useState } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import Search from "./Search";
import Theme from "./Theme";
const Toolbar = () => {
  const { theme } = useContext(TodoContext);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={theme == "light" ? "toolbar" : "toolbar t-dark"}>
      <h3>To do App</h3>
      <Search setSearchValue={setSearchValue} />
      <Theme />
    </div>
  );
};
export default Toolbar;
