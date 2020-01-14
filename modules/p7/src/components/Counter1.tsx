import React,{useState} from 'react';

import CounterNav from './CounterNav'

const Counter1 = () => {
  const [state,setState]=useState(0)
  return (
    <div className="counter-section">
      <div className="counter-text">
        <h3>Functional counter 1: useState</h3>
        <p>
          Function component using useState hook. No types used.
        </p>
      </div>
      <div className="counter-value">
        {state}
      </div>
      <CounterNav
        onIncrement={()=>{
          console.log("Incement event")
          setState(state+1)
        }}
        onDecrement={()=>{
          console.log("Decrement event")
          setState(state-1)
        }}
      />
    </div>
  );
};

export default Counter1;