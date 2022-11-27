import React from "react";
import Clock from "../Clock";
import Todo from "../Todo";

function MainPresenter(props) {
  return (
    <div
      style={{ margin: "100px auto", width: "500px", backgroundColor: "#efff" }}
    >
      <div
        style={{
          height: 100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, textAlign: "center",backgroundColor: "#dfff", border: "1px" }}
        onClick={props.onClickTab('todo')}>
          <h2>Todo</h2>
        </div>
        <div style={{ flex: 1, textAlign: "center",backgroundColor: "#dfff", border: "1px" }}
        onClick={props.onClickTab('clock')}>
          <h2>Clock</h2>
        </div>
      </div>
      { props.screen==='todo'? <Todo /> : <Clock />}
    </div>
  );
}

export default MainPresenter;
