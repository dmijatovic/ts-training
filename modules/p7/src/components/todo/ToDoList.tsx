import React from 'react';
import {useSelector} from 'react-redux'
import {ToDo} from "../../store/reducers"
const ToDoList = () => {
  const todos:ToDo[] = useSelector((state:any)=>{
    const {todo} = state['FetchToDo']
    return todo
  })
  return (
    <div>
      {
        todos.map(todo=>{
          return (
            <p key={todo.id}>
              {todo.title}, done:{todo.done ? "Y" : "N"}
            </p>
          )
        })
      }
    </div>
  );
};

export default ToDoList;