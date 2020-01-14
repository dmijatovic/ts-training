import {Dispatch} from 'redux'
import {actionType} from "../actions"

export const midFetch = (store:any) => (next:Dispatch) => (action:any) => {
  //redux middleware call
  console.log("midFetch middleware action...", action)

  switch(action.type){
    case actionType.fetchTodoStart:
      //take url from payload
      const url = action.payload
      //continue action - will show loader
      next(action)
      // wait 2 sec before fetch
      setTimeout(()=>{
        //fetch data
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
          next({
            type:actionType.fetchTodoDone,
            payload: data
          })
        })
        .catch(e=>{
          next({
            type:actionType.fetchTodoError,
            payload: e
          })
        })
      },2000)
      
      break;
    default:
      next(action)
  }
}
