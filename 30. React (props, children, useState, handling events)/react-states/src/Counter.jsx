import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  let [mode, setMode] = useState(false);

  function handleIncrease() {
    setCounter(++counter);
  }
  function handleDecrease() {
    if (counter >= 1) {
      setCounter(--counter);
    }
  }
  function handleReset() {
    setCounter(0);
  }
  function handleMode(e) {
    setMode(!mode);
    if (mode) {
      e.target.classList.replace("dark", "light");
    } else {
      e.target.classList.replace("light", "dark");
    }
    console.log(mode);
  }
  return (
    <>
      <button onClick={handleDecrease}>decrease</button>
      <span>{counter}</span>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleReset}>reset</button>
      <button className="light" onClick={(e) => handleMode(e)}>
        change mode
      </button>
    </>
  );
};

export default Counter;
