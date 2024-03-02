import * as St from "./styles/todoItem.style";
import TodoItem from "./TodoItem";
import { getTodos } from "../api/todos-api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const TodoLists = () => {
  const [sort, setSort] = useState("asc");

  const onChangeSort = (e) => {
    const nextSort = e.target.value;
    setSort(nextSort);
  };

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const sortedTodos = todos
    ? [...todos].sort((a, b) => {
        if (sort === "asc") {
          return new Date(b.deadline) - new Date(a.deadline);
        } else {
          return new Date(a.deadline) - new Date(b.deadline);
        }
      })
    : [];

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const workingTodos = sortedTodos.filter((todo) => !todo.isDone);
  const doneTodos = sortedTodos.filter((todo) => todo.isDone);

  return (
    <>
      <div>
        <St.Title>
          <St.TitleSpan>📝 Working </St.TitleSpan>
          <St.TitleSelect value={sort} onChange={onChangeSort}>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <TodoItem todos={workingTodos} />
        </St.TodoListFlex>
        <St.Title>
          <St.TitleSpan>👍🏻 Done </St.TitleSpan>
          <St.TitleSelect value={sort} onChange={onChangeSort}>
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
