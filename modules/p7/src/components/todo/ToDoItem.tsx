import React from 'react';

import {ToDo} from "../../store/reducers"

const ToDoItem = (props:ToDo) => {
  const {title,completed} = props
  const classes =`ToDoItem ${completed?"completed":""}`
  return (
    <div className={classes}>
      <div className="todo-text">
        {title}
      </div>
      <div className="todo-staus">
        {completed ? "DONE" : "OPEN"}
      </div>
    </div>
  );
};

export default ToDoItem;