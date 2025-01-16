export function Header(props) {
  const { todoList } = props;
  const todosQuantity = todoList.length;
  const isTaskPlural = todosQuantity > 1;
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosQuantity} {isTaskPlural ? `tasks` : `task`}!
      </h1>
    </header>
  );
}
