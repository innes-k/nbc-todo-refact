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

export const addTodo = async (todo) => {
  await todoClient.post("/", todo);
};

export const deleteTodo = async (id) => {
  await todoClient.delete(`/${id}`);
};

export const toggleTodo = async (todo) => {
  await todoClient.patch(`${todo.id}`, { ...todo, isDone: !todo.isDone });
};
