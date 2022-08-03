import { useContext, useState } from "react";
import { TodoContext } from "../../Contexts/TodoContext";
import Search from "./Search";
import Link from "next/link";
import Theme from "./Theme";
const Toolbar = () => {
  const { theme } = useContext(TodoContext);
  return (
    <div className={theme == "light" ? "toolbar" : "toolbar t-dark"}>
      <Link href={"/"}>
        <h3 className="toolbar-header">To do App</h3>
      </Link>
      <Search />
      <Theme />
    </div>
  );
};
export default Toolbar;
