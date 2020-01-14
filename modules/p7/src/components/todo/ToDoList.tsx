import React from 'react';
import {useSelector} from 'react-redux'
import {ToDo} from "../../store/reducers"
import ToDoItem from "./ToDoItem"

const ToDoList = () => {
  const todos:ToDo[] = useSelector((state:any)=>{
    const {todo} = state['FetchToDo']
    return todo
  })
  return (
    <div className="ToDoList-body">
      {
        todos.map(todo=>{
          return (
            <ToDoItem
              key={todo.id}
              {...todo}
            />
          )
        })
      }
    </div>
  );
};

export default ToDoList;