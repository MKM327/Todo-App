import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import SearchResults from "./SearchResults";
const Search = () => {
  const { setSearchValue, searched } = useContext(SearchContext);
  return (
    <div className="search-area">
      <div className="toolbar-input-wrapper">
        <input
          type="text"
          name="search-area"
          id=""
          className="input-text toolbar-search"
          placeholder="Search"
          onChange={(event) => setSearchValue(event.target.value)}
          disabled={searched}
        />
        <SearchResults />
      </div>
      {/* <button
        onClick={() => {
          setSearched(true);
        }}
      >
        Search
      </button> */}
    </div>
  );
};
export default Search;
