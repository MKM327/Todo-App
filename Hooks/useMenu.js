import { useState } from "react";

function useMenu() {
  const [menuState, setMenuState] = useState(false);
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [currentItem, setCurrentItem] = useState();
  function openCloseMenu() {
    setMenuState(!menuState);
  }
  return {
    header,
    setHeader,
    description,
    setDescription,
    menuState,
    setMenuState: openCloseMenu,
    currentItem,
    setCurrentItem,
  };
}
export default useMenu;
