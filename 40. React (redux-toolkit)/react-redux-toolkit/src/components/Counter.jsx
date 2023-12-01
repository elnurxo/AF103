import { useDispatch } from "react-redux";
import {
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "../redux/slices/counterSlice";
import IncrementBtn from "./IncrementBtn";
import Value from "./Value";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <Value/>
      <IncrementBtn />
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        increment by 5
      </button>
      <button
        onClick={() => {
          dispatch(decrementByAmount(5));
        }}
      >
        decrement by 5
      </button>
    </>
  );
};

export default Counter;
