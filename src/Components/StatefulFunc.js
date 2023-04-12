import { useState } from "react";

const StatefulFunc = () => {
  const [val, setVal] = useState(1);
  const multiplyBy2 = () => {
    setVal(val * 2);
  };
  const divisionBy2 = () => {
    setVal(val / 2);
  };
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={multiplyBy2}>Multiply by 2</button>
      <button onClick={divisionBy2}>Division by 2</button>
    </div>
  );
};
export default StatefulFunc;
