import { useState } from "react";
import classes from "./counter.module.scss";
export function Counter() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={() => onIncrement()}>
        +
      </button>
    </>
  );
}

export default Counter;
