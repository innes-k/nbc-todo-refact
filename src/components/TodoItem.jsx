import * as St from "./styles/todoItem.style";
import { deleteTodo, toggleTodo } from "../api/todos-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoItem = ({ todos }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const { mutate: toggleMutate } = useMutation({
    mutationFn: (todo) => toggleTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const reLocateHandler = async (todo) => {
    toggleMutate(todo);
  };

  const removeHandler = async (id) => {
    deleteMutate(id);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <St.TodoList className="전체 - 세로정렬, space-between으로">
              <St.TodoListBody className="title, body">
                <St.Span>{todo.title}</St.Span>
                <p>{todo.body}</p>
              </St.TodoListBody>
              <div
                className="날짜, 버튼2개 - 세로정렬"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <St.Time>
                  {new Date(todo.deadline).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long", // "long"을 사용하면 월 이름이 됨
                    day: "numeric",
                  })}
                  까지
                </St.Time>
                <St.TodoListBtns className="버튼 2개 - 가로정렬">
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
              </div>
            </St.TodoList>
          </div>
        );
      })}
    </>
  );
};

export default TodoItem;
