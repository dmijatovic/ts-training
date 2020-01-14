import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import CounterNav from "./CounterNav"

import {actionType} from "../store/actions"

interface C3Props{
  name:string,
  children: any
}

const Counter3:React.FC<C3Props> = (props:C3Props) => {
  const {name, children} = props
  const dispatch = useDispatch()
  //extract mutate counter
  const count = useSelector((state:any)=>{
    // console.log("useSelector.store...",MutateCounter)
    return state['MutateCounter']['count']
  })
  // console.log("Counter3...props", props)
  // const store = useStore()
  return (
    <div className="counter-section">
      <div className="counter-text">
        <h3>Functional typed counter 3 witn name "{name}"</h3>
        <p>This component is TYPED function component and uses redux
            store and hooks
        </p>
      </div>
      <div className="counter-value">
        {count}
      </div>
      <CounterNav
        onDecrement={()=>dispatch({type:actionType.mutateCounter,payload:-1})}
        onIncrement={()=>dispatch({type:0,payload:1})}
      />

      {children}
    </div>
  );
};

export default Counter3;