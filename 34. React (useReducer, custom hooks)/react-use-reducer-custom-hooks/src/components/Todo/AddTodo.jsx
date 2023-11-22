/* eslint-disable react/prop-types */
import { useState } from "react";
import ACTIONS from "../../constants/ACTIONS";

const AddTodo = ({dispatch}) => {
  let [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: ACTIONS.ADD,
          payload: { id: Date.now().toString(), name, isDone: false },
        });
        setName("");
      }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter todo"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default AddTodo;
