export function TodoCard(props) {
  const { todo, todoIndex, handleDelete, handleComplete } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todo.complete}
          onClick={() => {
            handleComplete(todoIndex);
            console.log(todoIndex);
          }}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDelete(todoIndex);
            console.log("todoIndex", todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
