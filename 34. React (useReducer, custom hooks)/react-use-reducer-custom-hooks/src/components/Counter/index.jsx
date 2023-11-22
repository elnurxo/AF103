import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  let [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DECREMENT });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREMENT });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RESET });
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
