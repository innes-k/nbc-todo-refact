import * as St from "./styles/working.style";

const TodoItem = ({ todos, setTodos }) => {
  // '완료' 클릭시 isDone을 true로, '취소' 클릭시 isDone을 false로 바꾸기
  //   const reLocateHandler = function (id) {
  //     const reLocateBox = box.map(function (item) {
  //       if (item.id === id) {
  //         return { ...item, isDone: !item.isDone };
  //       }
  //       return item;
  //     });
  //     setTodos(reLocateBox);
  //   };

  const reLocateHandler = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  // 삭제버튼 onclick
  const removeHandler = function (id) {
    const removeBox = todos.filter(function (item) {
      return item.id !== id;
    });
    setTodos(removeBox);
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
                onClick={() => reLocateHandler(todo.id)}
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
