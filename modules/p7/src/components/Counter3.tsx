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
  // use redux dispatch method
  const dispatch = useDispatch()
  //extract count from redux store
  const count = useSelector((state:any)=>{
    // console.log("useSelector.store...",MutateCounter)
    return state['counter']['count']
  })
  // console.log("Counter3...props", props)
  // const store = useStore()
  return (
    <div className="counter-section">
      <div className="counter-text">
        <h3>Functional typed counter component witn prop name: "{name}"</h3>
        <p>This component is TYPED function component and uses redux
            store and hooks. In addition it accepts the child components/elements.
        </p>
      </div>
      <div className="counter-value">
        {count}
      </div>
      <CounterNav
        onDecrement={()=>dispatch({type:actionType.mutateCounter,payload:-1})}
        onIncrement={()=>dispatch({type:0,payload:1})}
      />
      <div className="Counter-children">
        {children}
      </div>
    </div>
  );
};

export default Counter3;