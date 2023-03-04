import React, { useState } from "react";

function FunCount() {
  const [count, setCount] = useState(0);

  const increace = () => {
    setCount(count + 1);
  };
  const decrese = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Function Count Redux " +- 1 "</h1>

      <button onClick={increace}> + </button>
      <div> {count} </div>
      <button onClick={decrese}> - </button>
    </div>
  );
}

export default FunCount;
