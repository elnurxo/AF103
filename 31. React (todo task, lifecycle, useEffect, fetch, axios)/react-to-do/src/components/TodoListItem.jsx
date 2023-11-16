import { PropTypes } from 'prop-types';
import moment from 'moment'

const TodoListItem = ({todo, setTodos, todos}) => {
  return (
    <li>
        <span style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}><b>{todo.desc}</b>, <em>{moment(todo.createdAt).format('MMM Do YY, h:mm a')}</em></span>
        <button onClick={(e)=>{
            let currentTodo = todos.find((x)=>x.id==todo.id);
            currentTodo.isCompleted = true;
            e.target.previousElementSibling.style.textDecoration = 'line-through';
            setTodos([...todos]);
        }}>
          Done
        </button>
        <button onClick={()=>{
            let filteredTodos = todos.filter((x)=>x.id!==todo.id);
            if (window.confirm('are you sure to delete?')) {
              setTodos([...filteredTodos]);
            }
        }}>delete</button>
        
    </li>
  )
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    todos: PropTypes.array,
    setTodos: PropTypes.func
}

export default TodoListItem