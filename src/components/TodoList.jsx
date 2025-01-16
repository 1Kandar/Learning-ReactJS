import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todoList, tab } = props;

  const filterTodoList =
    tab === "All"
      ? todoList
      : tab === "Completed"
      ? todoList.filter((val) => val.complete)
      : todoList.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        const tempTodoIndex = todoList.findIndex(
          (val) => val.input == todo.input
        );
        console.log(tempTodoIndex);
        return (
          <TodoCard
            todo={todo}
            key={todoIndex}
            todoIndex={tempTodoIndex}
            {...props}
          />
        );
      })}
    </>
  );
}
