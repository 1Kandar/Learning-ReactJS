import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoinput] = useState([]);

  const [tab, selectTab] = useState("All");

  function handleSetTodos(todoInput) {
    const newTodo = [...todoList, { input: todoInput, complete: false }];
    setTodoinput(newTodo);
    handleSave(newTodo);
  }

  function handleSelectTab(tabName) {
    selectTab(tabName);
  }

  function handleComplete(index) {
    const newTodoList = todoList.filter((val, valIndex) => {
      if (valIndex === index) {
        val.complete = true;
        console.log("val = ", todoList[index]);
        todoList[index] = val;
      }
      return [...todoList];
    });
    setTodoinput(newTodoList);
    handleSave(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = todoList.filter((val, valIndex) => {
      if (val !== todoList[index]) {
        return [...todoList];
      }
    });
    setTodoinput(newTodoList);
    handleSave(newTodoList);
  }

  function handleSave(curTodos) {
    localStorage.setItem("test-todo", JSON.stringify({ todoList: curTodos }));
  }

  useEffect(() => {
    if (!localStorage.getItem("test-todo") || !localStorage) {
      return;
    }
    console.log("here");
    let db = JSON.parse(localStorage.getItem("test-todo"));
    setTodoinput(db.todoList);
  }, []);

  return (
    <>
      <Header todoList={todoList} />
      <Tabs todoList={todoList} handleSelectTab={handleSelectTab} />
      <TodoList
        todoList={todoList}
        tab={tab}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
      <TodoInput handleSetTodos={handleSetTodos} />
    </>
  );
}

export default App;
