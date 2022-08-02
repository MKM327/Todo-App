import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { TodoContext } from "../../Contexts/TodoContext";
import SearchResult from "./SearchResult";
const SearchResults = () => {
  const { todoData } = useContext(TodoContext);
  const { searchValue, getSearchResult } = useContext(SearchContext);
  const SearchedData = getSearchResult(todoData);
  console.log(searchValue);
  return (
    <div
      class={
        searchValue != ""
          ? "toolbar-search-results results-open"
          : "toolbar-search-results results-closed"
      }
    >
      {SearchedData.map((item) => {
        return <SearchResult item={item} />;
      })}
    </div>
  );
};
export default SearchResults;
