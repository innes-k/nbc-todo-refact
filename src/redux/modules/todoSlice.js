import { createSlice } from "@reduxjs/toolkit";
// import db from "../../../db.json";

// const dummyData = db.todos;
// const initialState = [...dummyData];
const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    defaultTodos: (_state, actions) => {
      return actions.payload;
    },
    addTodos: (state, actions) => {
      state.push(actions.payload);
    },
    toggleTodo: (state, actions) => {
      const id = actions.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    deleteTodo: (state, actions) => {
      const id = actions.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { defaultTodos, addTodos, toggleTodo, deleteTodo } =
  todoSlice.actions;
