import { useEffect, useState } from "react";

function useMenu() {
  const [menuState, setMenuState] = useState("closed");
  function openCloseMenu() {
    console.log(menuState);
    if (menuState === "closed") {
      setMenuState("open");
    } else {
      setMenuState("closed");
    }
  }
  return {
    menuState,
    setMenuState: openCloseMenu,
  };
}
export default useMenu;
