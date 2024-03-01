import * as St from "./styles/working.style";

const TodoItem = ({ box, setBox }) => {
  // '완료' 클릭시 isDone을 true로, '취소' 클릭시 isDone을 false로 바꾸기
  const reLocateHandler = function (id) {
    const reLocateBox = box.map(function (item) {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setBox(reLocateBox);
  };

  // 삭제버튼 onclick
  const removeHandler = function (id) {
    const removeBox = box.filter(function (item) {
      return item.id !== id;
    });
    setBox(removeBox);
  };
  return (
    <St.TodoList>
      <St.TodoListBody>
        <St.Span>Title</St.Span>
        <p>body</p>
        <St.Time>
          {new Date().toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long", // "long"을 사용하면 월 이름이 됨
            day: "numeric",
          })}
          까지
        </St.Time>
      </St.TodoListBody>
      <St.TodoListBtns>
        <St.RemoveBtn onClick={() => removeHandler()}>삭제하기</St.RemoveBtn>
        <St.CompleteBtn onClick={() => reLocateHandler()}>
          완료하기
        </St.CompleteBtn>
      </St.TodoListBtns>
    </St.TodoList>
  );
};

export default TodoItem;
