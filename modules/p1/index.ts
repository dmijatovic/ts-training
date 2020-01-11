import axios from 'axios'

import "./src/variables"
// import "./src/interfaces"
import "./src/classes"


const url = 'https://jsonplaceholder.typicode.com/todos/1'

/**
 * Define data interface (format)
 * The interface can ignore data field
 */
interface Todo {
  id: number,
  title: string,
  completed: boolean
}

axios.get(url)
  .then(({data})=>{
    //assign type to returned data
    logToDo(data)
  })
  .catch(err=>console.error(err))

  /**
   * Log todos
   * @param todo<Todo>
   */
  function logToDo(todo:Todo){
    const text = `
      Todo with ID ${todo.id} with a title "${todo.title}" is ${todo.completed ? "completed" : "not completed!"}
    `
    //log info
    console.log(text)
    //log data
    console.log("todo object...", todo)
  }