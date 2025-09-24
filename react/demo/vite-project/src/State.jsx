import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0); // initial value 0

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default State;
