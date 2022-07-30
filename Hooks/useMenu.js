import { useState } from "react";

function useMenu() {
  const [menuState, setMenuState] = useState(false);
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

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
  };
}
export default useMenu;
