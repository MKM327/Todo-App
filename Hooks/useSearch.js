import { useState } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  function getSearchResult(todoData) {
    return todoData.filter((value) => {
      return value.Header.toLowerCase().startsWith(searchValue.toLowerCase());
    });
  }
  return {
    searchValue,
    setSearchValue,
    getSearchResult,
  };
};
export default useSearch;
