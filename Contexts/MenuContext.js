import { createContext } from "react";
import useMenu from "../Hooks/useMenu";
const MenuContext = createContext();
const MenuProvider = ({ children, data }) => {
  const {
    menuState,
    setMenuState,
    setHeader,
    setDescription,
    description,
    header,
    menuMode,
    setMenuMode,
  } = useMenu();
  return (
    <MenuContext.Provider
      value={{
        menuState,
        setMenuState,
        data,
        setHeader,
        setDescription,
        header,
        description,
        menuMode,
        setMenuMode,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export { MenuContext, MenuProvider };
