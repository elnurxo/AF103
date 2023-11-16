import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from "prop-types";


const AddToDo = ({todos, setTodos, setFilteredTodos}) => {
  let[newTodo, setNewTodo] = useState("");
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        if (newTodo.trim().length< 3) {
            window.alert('todo item lenght should be at least 3 characters!');
        }
        else{
            let newTODO = {
                id: uuidv4(),
                desc: newTodo,
                isCompleted: false,
                createdAt: new Date()
            }
            setFilteredTodos([]);
            setTodos([...todos, newTODO]);
            setNewTodo("");
        }
    }}>
        <input onChange={(e)=>{
            setNewTodo(e.target.value);
        }} value={newTodo} placeholder="add to do" type="text" required/>
        <button type="submit">submit</button>
    </form>
  )
}

AddToDo.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
    setFilteredTodos: PropTypes.func
}

export default AddToDo