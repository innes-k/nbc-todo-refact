import { useDispatch, useSelector } from "react-redux";
import * as St from "./styles/working.style";
import TodoItem from "./TodoItem";
import { defaultTodos, todoReducer } from "../redux/modules/todoSlice";
import { getTodos } from "../api/todos-api";
import { useEffect, useState } from "react";

const TodoLists = () => {
  // const todos = useSelector((state) => state.todoReducer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const todos = await getTodos();
  //     dispatch(defaultTodos(todos));
  //   };
  //   fetchData();
  // }, [dispatch]);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchData();
  }, [todos]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <div>
        <St.Title>
          <St.TitleSpan>📝 Working </St.TitleSpan>
          <St.TitleSelect>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <TodoItem todos={workingTodos} />
        </St.TodoListFlex>
        <St.Title>
          <St.TitleSpan>👍🏻 Done </St.TitleSpan>
          <St.TitleSelect>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <TodoItem todos={doneTodos} />
        </St.TodoListFlex>
      </div>
    </>
  );
};

export default TodoLists;
