import { useState } from "react";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";
import AddToDo from "./AddToDo";

const Todos = () => {
  let [todos, setTodos] = useState([]);
  let [filteredTodos, setFilteredTodos] = useState([]);
  return (
    <>
      <input onChange={(e)=>{
        let searchedTodos = [...todos].filter((x)=>x.desc.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()))
        setFilteredTodos([...searchedTodos]);
      }} type="text" placeholder="search todo" />
      <button
        onClick={() => {
          let filteredTodos = [...todos].filter((x) => x.isCompleted);
          setFilteredTodos([...filteredTodos]);
        }}
      >
        filter completed
      </button>
      <button onClick={()=>{
        let filteredTodos = [...todos].sort((x,y)=>y.createdAt-x.createdAt);
        setFilteredTodos(filteredTodos);
      }}>sort by date</button>
      <button
        onClick={() => {
          setFilteredTodos([]);
          setTodos([...todos]);
        }}
      >
        reset filter
      </button>
      {/* TodoList */}
      <TodoList>
        {filteredTodos.length > 0
          ? filteredTodos &&
            filteredTodos.map((todo, idx) => {
              return (
                <TodoListItem
                  todos={todos}
                  setTodos={setTodos}
                  todo={todo}
                  key={idx}
                />
              );
            })
          : todos &&
            todos.map((todo, idx) => {
              return (
                <TodoListItem
                  todos={todos}
                  setTodos={setTodos}
                  todo={todo}
                  key={idx}
                />
              );
            })}
      </TodoList>
      <AddToDo setFilteredTodos={setFilteredTodos} todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todos;
