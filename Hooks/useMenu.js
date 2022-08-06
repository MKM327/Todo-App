import { useState } from "react";

function useMenu() {
  const [menuState, setMenuState] = useState("closed");
  const [menuMode, setMenuMode] = useState("");
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  function openCloseMenu() {
    if (menuState === "closed") {
      setMenuState("open");
    } else {
      setMenuState("closed");
    }
  }
  return {
    header,
    setHeader,
    description,
    setDescription,
    menuState,
    setMenuState: openCloseMenu,
    setMenuMode,
    menuMode,
  };
}
export default useMenu;
