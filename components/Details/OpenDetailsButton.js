function OpenDetailsButton({ detailsState, setDetailsState }) {
  return (
    <div>
      <button className="arrow-btn" onClick={() => setDetailsState()}>
        <i className={detailsState ? "arrow down" : "arrow right"}></i>
      </button>
    </div>
  );
}
export default OpenDetailsButton;
