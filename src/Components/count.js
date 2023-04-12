import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [square, setSquare] = useState(0);

  useEffect(() => {
    setSquare(count * count);
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h1>Square: {square}</h1>
    </div>
  );
};
export default Count;
