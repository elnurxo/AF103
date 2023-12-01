import { useDispatch } from "react-redux";
import { delete_todo } from "../redux/slices/todoSlice";

// eslint-disable-next-line react/prop-types
const DeleteTodo = ({id}) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        if (window.confirm("are you sure to delete")) {
          dispatch(delete_todo(id));
        }
      }}
    >
      delete
    </button>
  );
};

export default DeleteTodo;
