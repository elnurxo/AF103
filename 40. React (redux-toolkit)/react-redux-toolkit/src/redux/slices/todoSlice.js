import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading:false,
  error: null
};

if (JSON.parse(localStorage.getItem("todos"))) {
  initialState.todos = JSON.parse(localStorage.getItem("todos"));
} else {
  localStorage.setItem("todos", JSON.stringify([]));
}


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add_todo: (state, action) => {
      let newTodo = {
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      };
      state.todos.push(newTodo);
      let prevTodos = JSON.parse(localStorage.getItem("todos"));
      localStorage.setItem("todos", JSON.stringify([...prevTodos, newTodo]));
    },
    delete_todo: (state, action) => {
      let idx = state.todos.findIndex((x) => x.id == action.payload);
      state.todos.splice(idx, 1);
      localStorage.setItem("todos", JSON.stringify([...state.todos]));
    },
    mark_todo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id == action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        localStorage.setItem("todos", JSON.stringify([...state.todos]));
      });
    },
    edit_todo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.updatedTodo.text;
        }
        localStorage.setItem("todos", JSON.stringify([...state.todos]));
      });
    },
  },
});


export const { add_todo, delete_todo, mark_todo, edit_todo } =
  todoSlice.actions;

export default todoSlice.reducer;
