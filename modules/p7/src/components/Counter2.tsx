import React from 'react';

import CounterNav from "./CounterNav"

interface CounterState{
  count:number
}

class Counter2 extends React.Component{
  // constructor(props:any){
  //   super(props)
  //   this.state = {
  //     count:0
  //   }
  // }
  state={
    count:0
  }
  render() {
    return (
      <div className="counter-section">
        <div className="counter-text">
          <h3>Class typed counter component</h3>
          <p>This component is TYPED class component with local state initialized
            in the constructor. Note that interface for state need to be provided
            WHEN state is defined in the constructor and you want to use prop name.
            Even any type will not work. You can use string to reference to prop
            state['propName'].
          </p>
        </div>
        <div className="counter-value">
          {this.state.count}
        </div>
        <CounterNav
          onIncrement={()=>{
            console.log("Incement event...", this.state)
            //this did not work all the time if you do not use interface
            this.setState({count: this.state.count +1 })
            // this.setState({count: this.state['count'] +1 })
          }}
          onDecrement={()=>{
            console.log("Decrement event...", this.state)
            //this did not work all the time if you do not use interface
            this.setState({count:this.state.count -1})
            // this.setState({count:this.state['count']-1})
          }}
        />
      </div>
    );
  }
}

export default Counter2;