import { useDispatch } from "react-redux";
import { increment } from "../redux/slices/counterSlice";

const IncrementBtn = () => {
    const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(increment());
      }}
    >
      +
    </button>
  );
};

export default IncrementBtn;
