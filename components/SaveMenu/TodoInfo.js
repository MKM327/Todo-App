const TodoInfo = () => {
  return (
    <div>
      <div>
        <input
          name="input-header"
          type="text"
          class="input-text input-text-header"
          placeholder="Header"
        />
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols=" 90"
          rows="7"
          class="input-text-desc"
          placeholder="Description"
        ></textarea>
      </div>
    </div>
  );
};
export default TodoInfo;
