import { createContext } from "react";
import useSearch from "../Hooks/useSearch";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const { setSearchValue, getSearchResult, searched, setSearched } =
    useSearch();
  return (
    <SearchContext.Provider
      value={{ setSearchValue, getSearchResult, searched, setSearched }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export { SearchContext, SearchProvider };
