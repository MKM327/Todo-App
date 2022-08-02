import { createContext } from "react";
import useSearch from "../Hooks/useSearch";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const { searchValue, setSearchValue, getSearchResult } = useSearch();
  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, getSearchResult }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export { SearchContext, SearchProvider };
