// import { useDispatch } from "react-redux";
import * as St from "./styles/working.style";
import // deleteTodo,
// todoReducer,

"../redux/modules/todoSlice";
import { deleteTodo, toggleTodo } from "../api/todos-api";

const TodoItem = ({ todos }) => {
  // const dispatch = useDispatch();

  // const reLocateHandler = (id) => {
  //   dispatch(toggleTodo(id));
  // };

  const reLocateHandler = async (todo) => {
    await toggleTodo(todo);
  };

  const removeHandler = async (id) => {
    // dispatch(deleteTodo(id));
    await deleteTodo(id);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <St.TodoList key={todo.id}>
            <St.TodoListBody>
              <St.Span>{todo.title}</St.Span>
              <p>{todo.body}</p>
              <St.Time>
                {new Date(todo.deadline).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler(todo.id)}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn
                onClick={() => reLocateHandler(todo)}
                $isDone={todo.isDone}
              >
                {todo.isDone ? "취소하기" : "완료하기"}
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
        );
      })}
    </>
  );
};

export default TodoItem;
