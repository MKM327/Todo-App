const Search = ({ setSearchValue }) => {
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
      <button>Save</button>
    </div>
  );
};
export default Search;
