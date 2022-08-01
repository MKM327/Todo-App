import { useContext, useState } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import Search from "./Search";
import Theme from "./Theme";
const Toolbar = ({ setSearchValue, setSearched }) => {
  const { theme } = useContext(TodoContext);
  return (
    <div className={theme == "light" ? "toolbar" : "toolbar t-dark"}>
      <h3>To do App</h3>
      <Search setSearchValue={setSearchValue} setSearched={setSearched} />
      <Theme />
    </div>
  );
};
export default Toolbar;
