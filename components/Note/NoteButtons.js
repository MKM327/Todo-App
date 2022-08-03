
const NoteButtons = ({ setMenu }) => {
  return (
    <div className="button-wrapper">
      <button className="edit-btn" onClick={() => setMenu("open")}>
        Edit
      </button>
      <button className="edit-btn">Delete</button>
    </div>
  );
};
export default NoteButtons;
