import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";

const Search = ({ setSearchValue, setSearched }) => {
  const { setSearchValue, setSearched } = useContext(SearchContext);
  return (
    <div className="search-area">
      <input
        type="text"
        name="search-area"
        id=""
        className="input-text toolbar-search"
        placeholder="Search"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button
        onClick={() => {
          setSearched(true);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
