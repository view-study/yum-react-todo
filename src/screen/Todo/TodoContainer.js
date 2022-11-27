import React, { useEffect, useState } from "react";
import TodoPresenter from "./TodoPresenter";

function TodoContainer() {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodoList()
  
    return () => {
      console.log("todo에서 나감");
    }
  }, [])

  const handleClickRemove = (id) =>()=> {
    const newTodoList = todoList.filter(e => e.id !== id)
    setTodoList(newTodoList)
  }
  const handleClickChange = (id) =>()=> {
    const newTodoList = todoList.map(e => e.id !== id ? e: {...e,completed : !e.completed} )
    setTodoList(newTodoList)
  }

  const getTodoList = async () =>{
    const api = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await api.json();
    setTodoList(data);
  }

  return <TodoPresenter todoList={todoList} 
  onClickRemove={handleClickRemove} onClickChange={handleClickChange}/>;
}

export default TodoContainer;
