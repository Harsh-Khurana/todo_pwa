import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoView, setTodoView] = useState("All");
  const [themeIcon, setThemeIcon] = useState("moon");

  const addTodo = (todoItem) => {
    setTodoList(todoList.concat({ value: todoItem, completed: false }));
  };

  const toogleTodo = (todoItem) => {
    setTodoList(
      todoList.map((todo) => {
        if (todoItem === todo) todoItem.completed = !todoItem.completed;
        return todo;
      })
    );
  };

  const deleteTodo = (todoItem) => {
    setTodoList(todoList.filter((todo) => todo !== todoItem));
  };

  const clearCompletedTodos = () => {
    setTodoList(todoList.filter((todo) => !todo.completed));
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
          alt="background image"
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
