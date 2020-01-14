import { combineReducers } from 'redux'
import { actionType, Action } from "../actions"

export interface counterState{
  count:number
}

export interface ToDo{
  id: number,
  title: string,
  done: boolean
}

export interface todoState{
  loading: boolean,
  todo:ToDo[]
  error:Error|null
}

const defaultToDo={
  loading:false,
  todo:[],
  error: null
}

export const MutateCounter = (state:counterState={count:0}, action:Action<number>)=>{
  switch(action.type){
    case actionType.mutateCounter:
      console.log("MutateCounter reducer...", action, state)
      return {
        ...state,
        count: state.count + action.payload
      }
    default:
      return state
  }
}

export const FetchToDo = (state:todoState=defaultToDo, action:Action<any>)=>{
  switch (action.type){
    case actionType.fetchTodoStart:
      return {
        ...state,
        loading:true
      }
    case actionType.fetchTodoDone:
      return {
        ...state,
        loading:false,
        todo: action.payload
      }
    case actionType.fetchTodoError:
      return {
        loading:false,
        error: action.payload,
        todo:[]
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  MutateCounter,
  FetchToDo
})