const SearchResult = ({ item }) => {
  return (
    <div class="search-result">
      <span>{item.Header}</span>
      <span>{item.Date}</span>
    </div>
  );
};
export default SearchResult;
