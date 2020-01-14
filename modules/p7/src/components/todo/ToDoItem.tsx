import React from 'react';

import {ToDo} from "../../store/reducers"

const ToDoItem = (props:ToDo) => {
  const {title,completed} = props
  const classes =`ToDoItem ${completed?"completed":""}`
  return (
    <div className={classes}>
      <div className="ToDoItem-status">
        {completed ? "DONE" : "OPEN"}
      </div>
      <div className="ToDoItem-title">
        {title}
      </div>
    </div>
  );
};

export default ToDoItem;