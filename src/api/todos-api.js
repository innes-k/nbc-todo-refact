import axios from "axios";

const todoClient = axios.create({
  baseURL: "http://localhost:3001/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = async () => {
  const todos = await todoClient.get("/");
  return todos.data;
};
