/* eslint-disable react/prop-types */
import ACTIONS from "../../constants/ACTIONS";

const TodoItem = ({ todo, dispatch }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.isDone ? "line-through" : "none",
        }}
      >
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.MARK_AS_DONE, id: todo.id });
        }}
      >
        {todo.isDone ? "undo" : "done"}
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE, id: todo.id });
        }}
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
