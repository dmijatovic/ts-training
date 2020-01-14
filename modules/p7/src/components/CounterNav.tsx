import React from 'react';

import "./CounterNav.css"

interface CounterNavProps{
  onDecrement: Function,
  onIncrement: Function
}

const CounterNav:React.FC<CounterNavProps> = (props:CounterNavProps) => {
  const {onDecrement, onIncrement} = props
  return (
    <div className="CounterNav">
      <button onClick={()=>onDecrement()}>Decrement</button>
      <button onClick={()=>onIncrement()}>Increment</button>
    </div>
  );
};

export default CounterNav;