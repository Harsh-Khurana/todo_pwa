import React, { useState } from "react";

export default ({ addTodo }) => {
  const [todoItem, setTodoItem] = useState("");

  const addTodoItem = (event) => {
    if (event.key === "Enter" && event.target.value) {
      addTodo(todoItem);
      setTodoItem("");
    }
  };

  return (
    <div className="todoItems-wrapper">
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        onKeyPress={addTodoItem}
        className="todoItem"
      />
    </div>
  );
};
