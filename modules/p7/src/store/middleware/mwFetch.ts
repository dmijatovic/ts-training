import {Dispatch} from 'redux'

import {Action, actionType} from "../actions"

export const mwFetch = (action:Action<any>) => {
  //initial return 
  return (dispatch:Dispatch)=>{
    //redux middleware call
    switch(action.type){
      case actionType.fetchTodoStart:
        const url = action.payload
        fetch(url)
          .then(resp=>resp.json())
          .then(data=>{
            dispatch({
              type:actionType.fetchTodoDone,
              payload: data
            })
          })
          .catch(e=>{
            dispatch({
              type:actionType.fetchTodoError,
              payload: e
            })
          })
    }

  }
}