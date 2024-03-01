import { useSelector } from "react-redux";
import * as St from "./styles/working.style";
import TodoItem from "./TodoItem";
import { todoReducer } from "../redux/modules/todoSlice";

const TodoLists = ({ setTodos }) => {
  const todos = useSelector((state) => state.todoReducer);

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
