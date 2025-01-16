import { useState } from "react";

export function TodoInput(props) {
  const { handleSetTodos } = props;

  const [input, setInput] = useState("");

  return (
    <div className="input-container">
      <input
        value={input}
        placeholder="Add a task"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          if (!input) return;
          handleSetTodos(input);
          setInput("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
