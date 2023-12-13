import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo, edit_todo, mark_todo } from "../redux/slices/todoSlice";
import DeleteTodo from "./DeleteTodo";


const Todos = () => {
  let todos = useSelector((state) => state.todos.todos);
  let inputRef = useRef();
  let dispatch = useDispatch();


  return (
    <>
      <form onSubmit={(e)=>{
        e.preventDefault();
        dispatch(add_todo(inputRef.current.value));
        inputRef.current.value = "";
      }}>
        <input ref={inputRef} placeholder="add to do" type="text" />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos && todos.map((todo)=>{
            return <React.Fragment key={todo.id}>
                <li style={{textDecoration: todo.isCompleted ? "line-through" : "none"}} key={todo.id}>{todo.text}</li>
                <button onClick={()=>{
                    dispatch(mark_todo(todo.id));
                }}>{todo.isCompleted ? "undo" : "done"}</button>
                <DeleteTodo id={todo.id}/>
                <button onClick={()=>{
                  dispatch(edit_todo({id:todo.id, updatedTodo:{text:'updated'}}));
                }}>edit</button>
            </React.Fragment>
        })}
      </ul>
    </>
  );
};

export default Todos;
