

export enum actionType {
  mutateCounter,
  fetchTodoStart,
  fetchTodoDone,
  fetchTodoError
}

// action interface using generic type
export interface Action<PT> {
  type: actionType,
  payload: PT
}

export const MutateCounter=(payload:number)=>{
  const action:Action<number>={
    type: actionType.mutateCounter,
    payload
  }
  return action
}

export const FetchToDo=(url:string)=>{
  return {
    type: actionType.fetchTodoStart,
    payload: url
  } as Action<string>
}