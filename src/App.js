import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

const initialTodoList = () => {
  if (localStorage.getItem("todoList")) {
    return JSON.parse(localStorage.getItem("todoList"));
  }
  return [];
};

const App = () => {
  const [todoList, setTodoList] = useState(initialTodoList());
  const [todoView, setTodoView] = useState("All");
  const [themeIcon, setThemeIcon] = useState("moon");

  const addTodo = (todoItem) => {
    const updateTodoList = todoList.concat({
      value: todoItem,
      completed: false,
    });
    setTodoList(updateTodoList);
    localStorage.setItem("todoList", JSON.stringify(updateTodoList));
  };

  const toogleTodo = (todoItem) => {
    const updateTodoList = todoList.map((todo) => {
      if (todoItem === todo) todoItem.completed = !todoItem.completed;
      return todo;
    });
    setTodoList(updateTodoList);
    localStorage.setItem("todoList", JSON.stringify(updateTodoList));
  };

  const deleteTodo = (todoItem) => {
    const updateTodoList = todoList.filter((todo) => todo !== todoItem);
    setTodoList(updateTodoList);
    localStorage.setItem("todoList", JSON.stringify(updateTodoList));
  };

  const clearCompletedTodos = () => {
    const updateTodoList = todoList.filter((todo) => !todo.completed);
    setTodoList(updateTodoList);
    localStorage.setItem("todoList", JSON.stringify(updateTodoList));
  };

  const changeTodoView = (view = null) => {
    setTodoView(view);
  };

  const filteredTodoList = () => {
    if (todoView === "All") return todoList;
    else if (todoView === "Active") {
      return todoList.filter((todo) => !todo.completed);
    }
    return todoList.filter((todo) => todo.completed);
  };

  return (
    <div className="container">
      <div className="top-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/bg-desktop-${
            themeIcon === "moon" ? "light" : "dark"
          }.jpg`}
          alt="background"
        />
      </div>
      <main>
        <h1>
          TODO
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-${themeIcon}.svg`}
            alt="icon"
            onClick={() => {
              document.body.classList.toggle("dark-theme");
              setThemeIcon(themeIcon === "moon" ? "sun" : "moon");
            }}
          />
        </h1>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todoList={filteredTodoList()}
          toogleTodo={toogleTodo}
          deleteTodo={deleteTodo}
        />
        <TodoFilter
          clearCompletedTodos={clearCompletedTodos}
          changeTodoView={changeTodoView}
          todoCount={todoList.length}
          todoView={todoView}
        />
      </main>
    </div>
  );
};

export default App;
