import React from "react";

export default ({
  clearCompletedTodos,
  changeTodoView,
  todoCount,
  todoView,
}) => {
  return (
    <div className="todo-filter todoItem todoItems-wrapper">
      <span>{todoCount} items left</span>
      <ul onClick={(e) => changeTodoView(e.target.textContent)}>
        <li className={todoView === "All" ? "todo-filter-active" : ""}>All</li>
        <li className={todoView === "Active" ? "todo-filter-active" : ""}>
          Active
        </li>
        <li className={todoView === "Completed" ? "todo-filter-active" : ""}>
          Completed
        </li>
      </ul>
      <span onClick={clearCompletedTodos}>Clear Completed</span>
    </div>
  );
};
