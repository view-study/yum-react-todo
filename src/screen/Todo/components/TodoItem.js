import React from "react";

function TodoItem({todo,onClickRemove,onClickChange}) {
  return (
    <div className="todo-item">
      <div className="remove" onClick={onClickRemove(todo.id)}>x</div>
      <div className="todo-text" onClick={onClickChange(todo.id)}>{todo.title}</div>
      <div className="check-mark">{todo.completed ? "✓" : ""}</div>
    </div>
  );
}

export default TodoItem;
