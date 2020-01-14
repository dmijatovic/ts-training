import React from 'react';
import {useSelector, useDispatch} from "react-redux"

import ToDoList from "./ToDoList"
import Loader from "./Loader"

import "./ToDoList.css"

const ToDoSection = () => {
  const dispatch = useDispatch()
  const loading = useSelector((store:any)=>{
    const {loading} = store['todos']
    return loading 
  })
  return (
    <div className="ToDoList">
      <div className="ToDoList-header">
        <h1>List of todo's</h1>
        <button onClick={()=>{
          dispatch({
            type:1,
            payload:'https://jsonplaceholder.typicode.com/todos'
          })
        }}>Load todos</button>
      </div>
      {loading ? <Loader/> : <ToDoList/>}
    </div>
  )
}
export default ToDoSection;