import * as St from "./styles/todoItem.style";
import TodoItem from "./TodoItem";
import { getTodos } from "../api/todos-api";
import { useQuery } from "@tanstack/react-query";

const TodoLists = () => {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
