import React from "react";

const Checkbox = ({ onClick, completed }) => {
  return (
    <div className="checkbox" onClick={onClick}>
      {completed ? (
        <img
          src={`${process.env.PUBLIC_URL}/images/icon-check.svg`}
          alt="checkbox"
        />
      ) : null}
    </div>
  );
};

export default ({ todoList, toogleTodo, deleteTodo }) => {
  return (
    <ul className="todoItems-wrapper todolist-container">
      {todoList.map((todoItem, idx) => (
        <li
          className={`todoItem ${todoItem.completed ? "todo-completed" : ""}`}
          key={idx}
        >
          <Checkbox
            onClick={() => toogleTodo(todoItem)}
            completed={todoItem.completed}
          />
          {todoItem.value}
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-cross.svg`}
            alt="cross"
            onClick={() => deleteTodo(todoItem)}
            className="todo-cross"
          />
        </li>
      ))}
    </ul>
  );
};
