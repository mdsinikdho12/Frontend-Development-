import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); //this is tupul syntax this array return 2 value 1.main state 2.conrol state or seterfunction

  function Dicrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={Dicrement}>Dicrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
