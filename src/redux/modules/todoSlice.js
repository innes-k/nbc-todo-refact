import { createSlice } from "@reduxjs/toolkit";
import db from "../../../db.json";

const dummyData = db.todos;
const initialState = [...dummyData];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, actions) => {
      state.push(actions.payload);
    },
    toggleTodo: (state, actions) => {
      const id = actions.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodos, toggleTodo } = todoSlice.actions;
