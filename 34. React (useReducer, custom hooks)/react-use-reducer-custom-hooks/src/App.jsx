/* eslint-disable no-case-declarations */
import { useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/Todo/AddTodo";
import Todo from "./components/Todo/Todo";
import TodoItem from "./components/Todo/TodoItem";
import ACTIONS from "./constants/ACTIONS";
import { useUpdatedLogger } from "./hooks/useUpdatedLogger";
import { useToggle } from "./hooks/useToggle";
import { useArray } from "./hooks/useArray";
import { useFetch } from "./hooks/useFetch";
import { useLocalStorage } from "./hooks/useLocalStorage";


function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, action.payload];
    case ACTIONS.MARK_AS_DONE:
      return todos.map((todo) => {
        if (todo.id == action.id) {
          return {...todo, isDone: !todo.isDone} ;
        }
        else{
          return todo;
        }
      });
    case ACTIONS.DELETE:
      return todos.filter((x)=>x.id!==action.id);
    default:
      return todos;
  }
}

function App() {
  let [todos, dispatch] = useReducer(reducer, []);
  let[search, setSearch] = useState("");
  useUpdatedLogger(search);
  let[toggle, toggleValue] = useToggle(false);
  let{arr, push, sortDes, sortInc, filter} = useArray([5,2,3]);
  let[name, setName] = useLocalStorage("name", "");
  let[basket,setBasket] = useLocalStorage("basket",[]); 
  let{data, loading, error} = useFetch('https://northwind.vercel.app/api/categories');
  return (
    <>
      <AddTodo dispatch={dispatch}/>
      <Todo>
          {todos && todos.map((todo)=>{
            return <TodoItem key={todo.id} dispatch={dispatch} todo={todo}/>
          })}
      </Todo>

      <hr />
      <h3 style={{textAlign:'center'}}>Custom hooks</h3>
      <input onChange={(e)=>{
        setSearch(e.target.value);
      }} type="text" placeholder="search" />

      <button onClick={()=>{
        toggleValue();
      }}>{toggle ? "hide" : "show"}</button>

      <h4>use Array hook</h4>
      <ul>
        {arr && arr.map((item,idx)=>{
          return <li key={idx}>{item}</li>
        }) }
      </ul>
      <button onClick={()=>{
        push(4)
      }}>push item</button>
      <button onClick={()=>{
        sortInc();
      }}>sort inc</button>
        <button onClick={()=>{
        sortDes();
      }}>sort dec</button>
      <button onClick={()=>{
        filter((x)=>x%2==0)
      }}>filter</button>

      <hr />
      <h2>use Fetch custom hook</h2>
      {loading && <div>loading...</div>}
      {data && data.map((item)=>{
        return <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={()=>{
            setBasket([...basket, item]);
          }}>basket</button>
        </div>
      })}
      {error && <div style={{color:'red'}}>error</div>}
      <div>
        <h2>Basket Items</h2>
        {basket  && Array.from(basket).map((item,idx)=>{
          return <div key={idx}>{item.name}</div>
        })}
      </div>
      <hr />
      <h3>use Local Storage</h3>
      <input onChange={(e)=>{
        setName(e.target.value);
      }} type="text" placeholder="add to local storage"/>
      <p>localStorage: {name}</p>
    </>
  );
}

export default App;
