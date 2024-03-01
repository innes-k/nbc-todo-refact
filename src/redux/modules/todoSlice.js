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
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodos } = todoSlice.actions;
