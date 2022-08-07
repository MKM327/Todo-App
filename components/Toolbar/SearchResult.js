import Link from "next/link";

const SearchResult = ({ item }) => {
  return (
    <Link href={`/Notes/${item.id}`}>
      <div className="search-result">
        <span className={item.Finished ? "toolbar-search-result" : ""}>
          {item.Header}
        </span>
        <span>{item.Date}</span>
      </div>
    </Link>
  );
};
export default SearchResult;
