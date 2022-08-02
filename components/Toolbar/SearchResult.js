import Link from "next/link";

const SearchResult = ({ item }) => {
  return (
    <Link href={`/Notes/${item.id}`}>
      <div className="search-result">
        <span>{item.Header}</span>
        <span>{item.Date}</span>
      </div>
    </Link>
  );
};
export default SearchResult;
