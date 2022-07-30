import { useState } from "react";

function useMenu() {
  const [menuState, setMenuState] = useState(false);
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  function openCloseMenu(todoItem = null) {
    if (todoItem == null) {
      setMenuState(!menuState);
    } else {
      setHeader(todoItem.Header);
      setDescription(todoItem.Description);
      setMenuState(!menuState);
      setUpdate(true);
    }
  }
  return {
    header,
    setHeader,
    description,
    setDescription,
    menuState,
    setMenuState: openCloseMenu,
    update,
    currentItem,
    setCurrentItem,
  };
}
export default useMenu;
