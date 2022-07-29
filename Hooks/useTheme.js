import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  return { theme, setTheme: validateTheme };

  function validateTheme(themeValue) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
};
export default useTheme;
