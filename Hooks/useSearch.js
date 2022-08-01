import { useState } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState(false);
  function getSearchResult(todoData) {
    return todoData.filter((value) => {
      return value.Header.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
  return {
    searchValue,
    setSearchValue,
    getSearchResult,
    setSearched,
    searched,
  };
};
export default useSearch;
