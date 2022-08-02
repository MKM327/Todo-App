import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { TodoContext } from "../../Contexts/TodoContext";
import SearchResult from "./SearchResult";

const SearchResults = () => {
  const { todoData } = useContext(TodoContext);
  const { searchValue, getSearchResult } = useContext(SearchContext);
  const SearchedData = getSearchResult(todoData);

  return (
    <div
      className={
        searchValue != ""
          ? "toolbar-search-results results-open"
          : "toolbar-search-results results-closed"
      }
    >
      {SearchedData.map((item) => {
        return <SearchResult item={item} key={item.id} />;
      })}
    </div>
  );
};
export default SearchResults;
