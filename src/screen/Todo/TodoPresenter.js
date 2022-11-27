import React from "react";
import TodoItem from "./components/TodoItem"
import "./todo.css";

function TodoPresenter(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 50, backgroundColor: "#dfff", width: "100%" }}>
        <h3>TodoList</h3>
      </div>
      <section
        id="listBox"
        style={{ display: "flex", flex: 1, flexDirection: "column" }}
      >
        {props.todoList.map((todo,index) =>
        <TodoItem key={index} todo={todo} 
        onClickRemove={props.onClickRemove} onClickChange={props.onClickChange}/>)}
      </section>
    </div>
  );
}

export default TodoPresenter;
