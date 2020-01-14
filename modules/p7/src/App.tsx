import React from 'react';

import './App.css';

import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import Counter3 from "./components/Counter3"
import ToDoSection from "./components/todo"

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <Counter1/>
        <Counter2/>
        <Counter3 name="This is my name">
          <p>My children are here</p>
        </Counter3>
      </section>
      <section className="todo-section">
        <ToDoSection/>
      </section>
    </div>
  );
}

export default App;
