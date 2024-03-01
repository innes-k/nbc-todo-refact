import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Date.now(),
    title: "Todo List 정복!",
    body: "Todo List를 마스터해보자",
    isDone: false,
    deadline: "2024-01-31",
  },
];
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
